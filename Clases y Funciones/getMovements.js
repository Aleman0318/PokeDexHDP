import Moves from "../Clases y Funciones/Moves.js";

const getMovements = async function (array) {
    const movimientos = [];
    const move404 = "Movimiento Inventado";
    const power404 = 200;

    const options = {
        method: 'GET'
    };

    for (let i = 0; i < array.length; i++){

        const response = await fetch(array[i].move.url, options);

        if(!response.ok){

            const movements = new Moves();

            movements.setName(move404);
            movements.setPower(power404);

            movimientos.push(movements);


        }else{

            const movements = new Moves();

            const data = await response.json();

            const nameMove = data.name;
            const powerMove = data.power;

            movements.setName(nameMove);
            movements.setPower(powerMove);

            movimientos.push(movements);
        }

    }

    return movimientos;
}

export default getMovements;
