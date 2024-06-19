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

export default getSpecies;