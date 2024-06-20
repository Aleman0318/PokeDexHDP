
//importamos la clase Pokemon
import Pokemon from "../Clases y Funciones/Pokemon.js";
import getPokemons from "../Clases y Funciones/getPokemons.js"
import getSpecies from "../Clases y Funciones/getSpecies.js";
import getDebilidades from "../Clases y Funciones/getDebilidades.js";
import getEggsGroup from "../Clases y Funciones/getEggsGroups.js";
import getStats from "../Clases y Funciones/getStats.js";
import getColorPokemon from "../Clases y Funciones/getColorPokemon.js";
import getMovements from "../Clases y Funciones/Moves.js";


const cargarDatos = async () => {

    try {

        const Pokemons = [];
        const colores = [];

        const pokemonDetails = await getPokemons();

        const options = {
            method: 'GET'
        };

        for (let i = 0; i < pokemonDetails.length; i++) {

            const p = new Pokemon(); //creamos una nueva instancia pokemon

            //***************PROMESA*******************/

            let response = await fetch(pokemonDetails[i].species.url, options); //obtenemos todo lo relacionado con las species de los pokemons

            const dataSpecies = await response.json(); //parseamos a JSON la promesa obtenida

            //***************NOMBRE Y ID*******************/

            p.setName(pokemonDetails[i].name); //seteamos el nombre a la instancia
            p.setID(pokemonDetails[i].id) //seteamos el id a la instancia

            //***************HABILIDADES*******************/

            const abilitiesArray = pokemonDetails[i].abilities; //acortamos la consulta para mejor uso
            //agregamos cada habilidad del pokemon por medio del metodo propio de la instancia
            for (let j = 0; j < abilitiesArray.length; j++) {
                
                p.addAbility(abilitiesArray[j].ability.name);
                
            }

            //***************TIPOS*******************/

            const typesArray = pokemonDetails[i].types; //recortamos la consulta del array de tipos para manejo mas fácil

            //agregamos cada tipo del pokemon por medio del metodo propio de la instancia
            for (let z = 0; z < typesArray.length; z++) {

                p.addType(typesArray[z].type.name); 

            }

            //***************PESO Y ALTURA*******************/

            p.setHeight(pokemonDetails[i].height); //seteamos la altura en decimetros (el metodo set convierte a cm)
            p.setWeight(pokemonDetails[i].weight); //seteamos el peso en hectogramos (el metodo set convierte a kg)


            //***************ESPECIES*******************/

            const Specie = getSpecies(dataSpecies); //obtenemos la especie por medio de la data obtenida de la promesa realizada

            p.setSpecie(Specie); //seteamos la especie en la instancia

            //***************DEBILIDADES*******************/

            const weaknessesArray = pokemonDetails[i].types; //recortamos la solicitud para pasarla por parametro

            const weaknesses = await getDebilidades(weaknessesArray); //obtenemos un array con todas las debilidades del pokemon

            for (let w = 0; w < weaknesses.length; w++) {
                
                p.addWeaknesses(weaknesses[w]); //añadimos cada debilidad al pokemon
                
            }

            //***************GRUPOS DE HUEVOS*******************/

            const EggGroups = getEggsGroup(dataSpecies); //obtenemos un array de grupos de huevos por medio de la data de la promesa

            for (let e = 0; e < EggGroups.length; e++) {
                
                p.addeggGroup(EggGroups[e]); //agregamos cada grupo de huevo al pokemon
                
            }

            //***************ESTADISTICAS*******************/

            const stats = getStats(pokemonDetails[i].stats); //obtenemos un objeto de tipo stats

            p.setStats(stats);

            //***************COLOR*******************/

            const color = getColorPokemon(dataSpecies); //obtenemos un color directamente de la data de la promesa

            p.setColor(color); //seteamos el color en la instancia

            if(!colores.includes(color)){
                colores.push(color);
            }

            //***************MOVIMIENTOS*******************/

            const ArrayMovements = await getMovements(pokemonDetails[i].moves);

            for (let h = 0; h < ArrayMovements.length; h++) {
                
                p.addMove(ArrayMovements[h]);
                
            }

            //***************AGREGAR POKEMON*******************/

            Pokemons.push(p); //agrego el pokemon al array que los contendra como objetos con sus datos

           
        }

        Pokemons.sort((a, b) => a.getID() - b.getID()); //ordenamos los pokemons por su ID
       
        let contador = 1;
        //mostramos los datos
        Pokemons.forEach(element => {

            console.log("Name: " + element.getName() + " # Movements >> " + "Name: " + element.getMoves().getName() + " # Power: " + element.getMoves().getPower() + " # contador: " + contador);
            contador++;
         });

    } catch (error) {
        console.error("Ha ocurrido un error con la carga de datos: ", error);
    }


}


cargarDatos();

