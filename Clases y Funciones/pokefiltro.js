import DibujarPokeDetails from "./DibujarPokemonDetails.js";

const buscar = (pokemon, zona) => {
    const nombre = document.querySelector("[INPUT]");
    const pokearea = document.querySelector("[POKE-AREA]");
    ;

    nombre.addEventListener("change", pokebuscar);

    function pokebuscar() {
        if(nombre.value !== ""){
            let pokelugar = 0;
            let estapoke = false;
            for (let index = 0; index < pokemon.length; index++) {
            if(nombre.value === pokemon[index].name){
                pokelugar = index;
                estapoke = true;
                break;
            }
        }
        if(estapoke){
            pokearea.innerHTML = ``
            DibujarPokeDetails(pokemon[pokelugar], zona);
        }else{
            alert("no se encontro");
        }
        }else{
            pokearea.innerHTML = ``
            for (let index = 0; index < pokemon.length; index++) {
                DibujarPokeDetails(pokemon[index], zona);
            }
        }
    }
}
export default buscar;