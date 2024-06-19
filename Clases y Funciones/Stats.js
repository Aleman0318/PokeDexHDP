
class Stats {

    #hp;
    #attack;
    #defense;
    #special_attack;
    #special_defense;
    #speed;

    constructor() {

    }

    getHP(){
        return this.#hp;
    }

    getAttack(){
        return this.#attack;
    }

    getDefense(){
        return this.#defense;
    }

    getSpecialAttack(){
        return this.#special_attack;
    }

    getSpecialDefense(){
        return this.#special_defense;
    }

    getSpeed(){
        return this.#speed;
    }

    setHP(hp){
        this.#hp = hp;
    }

    setAttack(attack){
        this.#attack = attack;
    }

    setDefense(defense){
        this.#defense = defense;
    }

    setSpecialAttack(special){
        this.#special_attack = special;
    }

    setSpecialDefense(special){
        this.#special_defense = special;
    }

    setSpeed(speed){
        this.#speed = speed;
    }
}

export default Stats;