const getEggsGroup = async (url) => {

    const eggsGroup = [];

    const options = {
        method: 'GET'
    };

    const response = await fetch(url, options);

    const data = await response.json();

    const groupsArray = data.egg_groups;

    for (let i = 0; i < groupsArray.length; i++) {
        
        eggsGroup.push(groupsArray[i].name);
    }

    return eggsGroup;

}

export default getEggsGroup;