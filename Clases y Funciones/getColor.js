
const getColor = async (url) => {

    const options = {
        method: 'GET'
    };

    const response = await fetch(url, options);

    const data = await response.json();

    const color = data.color.name;

    return color;

}

export default getColor;