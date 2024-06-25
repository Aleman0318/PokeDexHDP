
//importamos la clase Pokemon
import Pokemon from "../Clases/Pokemon.js";
import DibujarPokemon from "./DibujarPokemon.js";
import test from "./test.js";
import buscar from "./pokefiltro.js";
import DibujarTarjeta from "./pokeTarjeta.js";
import DibujarPokeDetails from "./DibujarPokemonDetails.js";

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

        if (specieArray[i].language.name == "es") {

            species.push(specieArray[i].genus);
            break;
        }

    }

    return species;

}


//manejamos lo que ocurrira si la promesa se cumple o es rechazada
getPokemons().then(pokemonDetails => {

    const Pokemons = [];//creamos un array para mejor manejo de los datos que contendra a los pokemons con toda su informacion

    for (let i = 0; i < pokemonDetails.length; i++) {

        const p = new Pokemon(); //nueva instancia pokemon

        p.setName(pokemonDetails[i].name); //seteamos el nombre de la instancia

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

            //insertamos la instancia del pokemon en el array que contendra los pokemons para su manejo mas adelante
            Pokemons.push(p);

            console.log("Name: " + p.getName() + " ### Peso: " + p.getWeight() + " kg" + " #"+ i);

            //DibujarPokemon(Pokemons[i], pokemonDetails[i]);

            

            //DibujarPokemon(pokemonDetails[i], zona);

            let tipo = Pokemons[i].getTypes();
            //console.log(tipo);
            
            //controlamos en caso que la promesa sea rechazada
        }).catch(error => {
            console.error("Ha ocurrido un error con las especies: ", error);
        });

    }
    test();
    buscar(pokemonDetails);
    for (let index = 0; index < pokemonDetails.length; index++) {
        DibujarPokeDetails(pokemonDetails[index]);
    }
    

    //manejamos en caso que la promesa sea rechazada
}).catch(error => {
    console.error("Ha ocurrido un error con la carga de datos: ", error);
});


//getPokemons();


