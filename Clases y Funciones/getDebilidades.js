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

export default getDebilidades;