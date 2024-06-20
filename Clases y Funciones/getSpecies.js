const getSpecies = (dataSpecie) => {

    const specieArray = dataSpecie.genera;

    let specie;

    for (let i = 0; i < specieArray.length; i++) {

        if (specieArray[i].language.name == "en") {

            let cadena = specieArray[i].genus;
            let speciePokemon = cadena.replace("Pokémon", "").trim(); //eliminamos la palabra pokemon de la cadena obtenida en su especie ya que solo necesitamos la specie

            specie = speciePokemon;
            break;
        }

    }

    return specie;

}

export default getSpecies;