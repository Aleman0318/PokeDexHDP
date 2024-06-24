import DibujarTarjeta from "./pokeTarjeta.js";

const DibujarPokeDetails = (pokemon,zona) => {
    const pokeCard = document.createElement("div");

    const pokearea = document.querySelector("[POKE-AREA]");
                
    let tiposP = pokemon.types;
    let tipos = [];
                
    for (let i = 0; i < tiposP.length; i++) {
        tipos[i] = `<h5 class="${tiposP[i].type.name} tipo">${tiposP[i].type.name}</h5>`;
    }
                
    tipos = tipos.join('');
                
    pokeCard.innerHTML = `
        <div class="poke-titulo">
            <h3 class="pokename">${pokemon.name}</h3>
            <h3 class="pokeid">#${pokemon.id}</h3>
        </div>
        <div class="resumen">
            <div class="resumen-tipos" POKE-TIPO>
                ${tipos}
            </div>
            <div class="resumen-imagen" POKE-IMG>
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
            </div>
        </div>
    `;
                
    pokeCard.setAttribute("class", "card");

    pokeCard.addEventListener("click", function (){
        DibujarTarjeta(pokemon, zona);
    })
                
    pokearea.appendChild(pokeCard);
}
export default DibujarPokeDetails;