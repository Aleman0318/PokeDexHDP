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
    #image;
    #shiny;
    #sound;

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

    getImagen(){
        return this.#image;
    }

    getSound(){
        return this.#sound;
    }

    setName(name){
        this.#name = name;
    }

    getShiny(){
        return this.#shiny;
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

    setImagen(image){
        this.#image = image;
    }

    setShiny(url){
        this.#shiny = url;
    }

    setSound(sound){
        this.#sound = sound;
    }

    toJSON() {
        return {
            id: this.#id,
            nombre: this.#name,
            tipos: this.#types,
            especies: this.#specie,
            habilidades: this.#abilities,
            altura: this.#height,
            peso: this.#weight,
            debilidades: this.#weaknesses,
            grupoHuevos: this.#eggGroups,
            estadisticas: this.#stats.toJSON(),
            color: this.#color,
            movimientos: this.#moves.map(move => move.toJSON()),
            imagen: this.#image,
            shiny: this.#shiny,
            sound: this.#sound
        };
    }
}

export default Pokemon;