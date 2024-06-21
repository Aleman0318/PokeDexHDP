import Moves from "../Clases y Funciones/Moves.js";

const getMovements = async function (array) {
    const movimientos = [];

    const options = {
        method: 'GET'
    };

    for (let i = 0; i < array.length; i++) {
        const movements = new Moves();

        const response = await fetch(array[i].move.url, options);
        const data = await response.json();

        const nameMove = data.name;
        const powerMove = data.power;

        movements.setName(nameMove);
        movements.setPower(powerMove);

        movimientos.push(movements);
    }

    return movimientos;
}

export default getMovements;
