
//importamos la clase Pokemon
import Pokemon from "../Clases y Funciones/Pokemon.js";
import getPokemons from "../Clases y Funciones/getPokemons.js"
import getSpecies from "../Clases y Funciones/getSpecies.js";
import getDebilidades from "../Clases y Funciones/getDebilidades.js";
import getEggsGroup from "../Clases y Funciones/getEggsGroups.js";
import getStats from "../Clases y Funciones/getStats.js";
import getColorPokemon from "../Clases y Funciones/getColorPokemon.js";
import getMovements from "../Clases y Funciones/getMovements.js"

const cargarDatos = async () => {
    try {
        const Pokemons = [];
        const colores = [];

        const pokemonDetails = await getPokemons();

        const options = {
            method: 'GET'
        };

        const promises = pokemonDetails.map(async (pokemonDetail) => {
            const p = new Pokemon();

            const response = await fetch(pokemonDetail.species.url, options);
            const dataSpecies = await response.json();

            p.setName(pokemonDetail.name);
            p.setID(pokemonDetail.id);

            pokemonDetail.abilities.forEach(ability => p.addAbility(ability.ability.name));
            pokemonDetail.types.forEach(type => p.addType(type.type.name));

            p.setHeight(pokemonDetail.height);
            p.setWeight(pokemonDetail.weight);

            const Specie = getSpecies(dataSpecies);
            p.setSpecie(Specie);

            const weaknesses = await getDebilidades(pokemonDetail.types);
            weaknesses.forEach(weakness => p.addWeaknesses(weakness));

            const EggGroups = getEggsGroup(dataSpecies);
            EggGroups.forEach(group => p.addeggGroup(group));

            const stats = getStats(pokemonDetail.stats);
            p.setStats(stats);

            const color = getColorPokemon(dataSpecies);
            p.setColor(color);
            if (!colores.includes(color)) {
                colores.push(color);
            }

            const ArrayMovements = await getMovements(pokemonDetail.moves);
            ArrayMovements.forEach(move => p.addMove(move));

            Pokemons.push(p);

        });

        await Promise.all(promises);

        Pokemons.sort((a, b) => a.getID() - b.getID());

        return Pokemons;

    } catch (error) {
        console.error("Ha ocurrido un error con la carga de datos: ", error);
    }
}

cargarDatos();
