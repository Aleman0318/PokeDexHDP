
class Moves{
   
    #name;
    #power;

    constructor(){

    }

    getName(){
        return this.#name;
    }

    getPower(){
        return this.#power;
    }

    setName(name){
        this.#name = name;
    }

    setPower(power){
        this.#power = power;
    }

    toJSON() {
        return {
            nombre: this.#name,
            poder: this.#power 
        };
    }
}

export default Moves;