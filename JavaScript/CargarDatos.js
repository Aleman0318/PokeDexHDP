
//importamos la clase Pokemon
import Pokemon from "../Clases/Pokemon.js";

const getPokemons = async function () {

    //declaramos el metodo get para la variable options que sera pasada como parametro de la funcion fetch
    const options = {
        method: 'GET'
    };

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150", options); //obtenemos los primeros 150 pokemons a traves de un endpoint

    const data = await response.json(); //parseamos a JSON la promesa obtenida

    const PokemonsURLS = data.results.map(pokemon => pokemon.url); //obtenemos las url de cada pokemon y creamos un nuevo array con esos datos

    const PokemonsDetailsPromises = PokemonsURLS.map(url => fetch(url, options).then(res => res.json())); // como el resultado del fetch sera una promesa, usamos directamente
    //el metodo then para controlar que hacer con la promesa obtenida si la carga de datos funciona

    //contendra por medio del metodo promise.all() un array de promesas del conjunto de promesas realizadas en pokemonsdetailspromises volviendose en si una sola promesa
    const pokemonDetails = await Promise.all(PokemonsDetailsPromises);

    return pokemonDetails;

}


const getSpecies = async (url) => {

    const species = [];

    const options = {
        method: 'GET'
    };

    const response = await fetch(url, options);

    const data = await response.json();

    const specieArray = data.genera;

    for (let i = 0; i < specieArray.length; i++) {

        if (specieArray[i].language.name == "en") {

            let cadena = specieArray[i].genus;
            let speciePokemon = cadena.replace("Pokémon", "").trim(); //eliminamos la palabra pokemon de la cadena obtenida en su especie ya que siempre va pokemon especie

            species.push(speciePokemon);
            break;
        }

    }

    return species;

}

const getDebilidades = async (array) => {

    const weaknesses = [];

    const options = {
        method: 'GET'
    };

    for (let i = 0; i < array.length; i++) {

        const response = await fetch(array[i].type.url, options);

        const data = await response.json();

        const weaknessesAPI = data.damage_relations.double_damage_from;

        for (let j = 0; j < weaknessesAPI.length; j++) {

            if (!weaknesses.includes(weaknessesAPI[j].name)) {
                weaknesses.push(weaknessesAPI[j].name);
            }

        }
    }


    return weaknesses;

}

//manejamos lo que ocurrira si la promesa se cumple o es rechazada
getPokemons().then(pokemonDetails => {

    //creamos un array para mejor manejo de los datos que contendra a los pokemons con toda su informacion
    const Pokemons = [];


    for (let i = 0; i < pokemonDetails.length; i++) {

        const p = new Pokemon(); //nueva instancia pokemon

        p.setName(pokemonDetails[i].name); //seteamos el nombre de la instancia
        p.setID(pokemonDetails[i].id); //seteamos el id del pokemon

        const abilitiesArray = pokemonDetails[i].abilities; //recortamos la consulta del array de habilidades para manejo mas fácil

        for (let y = 0; y < abilitiesArray.length; y++) {

            p.addAbility(abilitiesArray[y].ability.name); //insertamos por el metodo addAbility() los nombres de las habilidades de los pokemons
        }

        const typesArray = pokemonDetails[i].types; //recortamos la consulta del array de tipos para manejo mas fácil

        for (let z = 0; z < typesArray.length; z++) {

            p.addType(typesArray[z].type.name); //insertamos por el metodo addtype() los tipos del pokemon

        }

        //controlamos la obtencion de las especies de cada pokemon por medio de su url
        getSpecies(pokemonDetails[i].species.url).then(spe => {

            //insertamos cada especie en el pokemon creado
            for (let s = 0; s < spe.length; s++) {

                p.addSpecie(spe[s]);

            }

            //seteamos la altura de cada pokemon en decimetros (el metodo set hace la conversion internamente a cm)
            p.setHeight(pokemonDetails[i].height);

            //seteamos el peso de cada pokemon en hectogramos (el metodo hace la conversion de forma interna a kg)
            p.setWeight(pokemonDetails[i].weight);

            const weaknessesArray = pokemonDetails[i].types;

            getDebilidades(weaknessesArray).then((weak) => {

                for (let d = 0; d < weak.length; d++) {

                    p.addWeaknesses(weak[d]);
                }

                //insertamos la instancia del pokemon en el array que contendra los pokemons para su manejo mas adelante
                Pokemons.push(p);

                Pokemons.sort((a, b) => a.getID() - b.getID()); //ordenamos los pokemons por su ID

                let contador = 1;
                //mostramos los datos
                Pokemons.forEach(element => {

                    console.log("Name: " + element.getName() + " ### Weaknesses: " + element.getWeaknesses() + " contador: " + contador);
                    contador++;
                });


            }).catch(error => {
                console.error("Ha ocurrido un error con las debilidades: ", error)
            });




            //controlamos en caso que la promesa sea rechazada
        }).catch(error => {
            console.error("Ha ocurrido un error con las especies: ", error);
        });


    }




    //manejamos en caso que la promesa sea rechazada
}).catch(error => {
    console.error("Ha ocurrido un error con la carga de datos: ", error);
});


getPokemons();

