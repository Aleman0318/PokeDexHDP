
class Pokemon {
    
    #name;
    #abilities;
    #types;
    #species;
    #height;
    #weight;

    constructor(){
        this.#abilities = [];
        this.#types = [];
        this.#species = [];
    }

    getName(){
        return this.#name;
    }

    getAbilities(){
        return this.#abilities
    }
    
    getTypes(){
        return this.#types;
    }

    getSpecies(){
        return this.#species;
    }

    getHeight(){
        return this.#height;
    }

    getWeight(){
        return this.#weight;
    }

    setName(name){
        this.#name = name;
    }

    addAbility(ability){
        this.#abilities.push(ability);
    }

    addType(type){
        this.#types.push(type);
    }

    addSpecie(specie){
        this.#species.push(specie);
    }

    setHeight(height){
        this.#height = height * 10; //convertimos la medida default "desimetros" en centimetros para mejor comprension
    }

    setWeight(weight){
        this.#weight = weight / 10; //convertimos la medida default "hectogramos" en kilogramos para mejorar la comprension
    }
}

export default Pokemon;