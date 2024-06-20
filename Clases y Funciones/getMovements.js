
import Moves from "./Moves";

const getMovements = async (array) =>{

    const moves = [];
    
    const options = {
        method: 'GET'
    };

    for (let i = 0; i < array.length; i++) {

        const m = new Moves();
        
        const response = await fetch(array[i].move.url, options);

        const data = await response.json();

        const nameMove = data.name;

        const powerMove = data.power;

        m.setName(nameMove);

        m.setPower(powerMove);
        
        moves.push(m);
    }

    return moves;
}

export default getMovements;