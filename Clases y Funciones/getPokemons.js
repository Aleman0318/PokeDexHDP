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

export default getPokemons;