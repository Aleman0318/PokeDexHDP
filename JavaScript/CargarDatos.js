
//importamos la clase Pokemon
import Pokemon from "../Clases y Funciones/Pokemon.js";
import getPokemons from "../Clases y Funciones/getPokemons.js"
import getSpecies from "../Clases y Funciones/getSpecies.js";
import getDebilidades from "../Clases y Funciones/getDebilidades.js";
import getEggsGroup from "../Clases y Funciones/getEggsGroups.js";
import getStats from "../Clases y Funciones/getStats.js";

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

            //acortamos el array obtenido para enviarlo y sea mas facil entender lo que se esta enviando
            const weaknessesArray = pokemonDetails[i].types;

            //metodo que extrae un array de las debilidades de los pokemons
            getDebilidades(weaknessesArray).then((weak) => {

                //asignamos cada valor del array obtenido por medio del metodo addWeaknesses
                for (let d = 0; d < weak.length; d++) {

                    p.addWeaknesses(weak[d]);
                }

                //metodo que extrae un array de grupo de huevos de los pokemons
                getEggsGroup(pokemonDetails[i].species.url).then((groups) => {

                    //asignamos cada valor del array retornado por medio del metodo addeggGroup()
                    for (let e = 0; e < groups.length; e++) {
                        
                        p.addeggGroup(groups[e]);
                    }

                    getStats(pokemonDetails[i].stats).then(stats => {
                        
                        p.setStats(stats);

                        //insertamos la instancia del pokemon en el array que contendra los pokemons para su manejo mas adelante
                        Pokemons.push(p);

                        Pokemons.sort((a, b) => a.getID() - b.getID()); //ordenamos los pokemons por su ID

                        let contador = 1;
                        //mostramos los datos
                        Pokemons.forEach(element => {

                            console.log("Name: " + element.getName() + " ### Defensa: " + element.getStats().getSpeed() + " contador: " + contador);
                            contador++;
                        });

                    }).catch(error => {
                        console.error("Ha ocurrido un error con la carga de stats: ", error)
                    })
                     

                }).catch(error => {
                    console.error("Ha ocurrido un error con la carga de los grupos de Huevos: ", error);
                });

               

            }).catch(error => {
                console.error("Ha ocurrido un error con la carga de las debilidades: ", error)
            });




            //controlamos en caso que la promesa sea rechazada
        }).catch(error => {
            console.error("Ha ocurrido un error con la carga de las especies: ", error);
        });


    }


    //manejamos en caso que la promesa sea rechazada
}).catch(error => {
    console.error("Ha ocurrido un error con la carga de los datos: ", error);
});


getPokemons();

