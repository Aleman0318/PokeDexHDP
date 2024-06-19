import Stats from "./Stats.js";

class Pokemon {
    
    #id;
    #name;
    #abilities;
    #types;
    #species;
    #height;
    #weight;
    #weaknesses;
    #eggGroups;
    #stats;

    constructor(){
        this.#abilities = [];
        this.#types = [];
        this.#species = [];
        this.#weaknesses = [];
        this.#eggGroups = [];
        this.#stats = new Stats();
    }

    getID(){
        return this.#id;
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

    getWeaknesses(){
        return this.#weaknesses;
    }

    geteggsGroups(){
        return this.#eggGroups;
    }

    getStats(){
        return this.#stats;
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

    addWeaknesses(weaknesses){
        this.#weaknesses.push(weaknesses);
    }

    setID(id){
        this.#id = id;
    }

    addeggGroup(group){
        this.#eggGroups.push(group);
    }

    setStats(object){
        this.#stats = object;
    }
}

export default Pokemon;