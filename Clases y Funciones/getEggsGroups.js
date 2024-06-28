const getEggsGroup = (dataSpecie) => {

    const eggsGroup = [];

    const groupsArray = dataSpecie.egg_groups;

    for (let i = 0; i < groupsArray.length; i++) {
        
        eggsGroup.push(groupsArray[i].name);
    }

    return eggsGroup;

}

export default getEggsGroup;