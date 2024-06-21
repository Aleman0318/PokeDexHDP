import Stats from "./Stats.js";

class Pokemon {
    
    #id;
    #name;
    #abilities;
    #types;
    #specie;
    #height;
    #weight;
    #weaknesses;
    #eggGroups;
    #stats;
    #color;
    #moves;

    constructor(){
        this.#abilities = [];
        this.#types = [];
        this.#weaknesses = [];
        this.#eggGroups = [];
        this.#stats = new Stats();
        this.#moves = [];
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
        return this.#specie;
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

    getColor(){
        return this.#color;
    }

    getMoves(){
        return this.#moves;
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

    setSpecie(specie){
        this.#specie = specie;
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

    setColor(color){
        this.#color = color;
    }

    addMove(move){
        this.#moves.push(move);
    }
}

export default Pokemon;