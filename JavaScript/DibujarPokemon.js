const DibujarPokemon = (pokemon, zona) => {

    const pokeCard = document.createElement("div");

    let tiposP = pokemon.types;
    let tipos = [];

    for (let index = 0; index < tiposP.length; index++) {
        tipos[index] = `<h5 class="${tiposP[index]} tipo">${tiposP[index]}</h5>`;
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

    const pokearea = document.querySelector("[POKE-AREA]");

    pokeCard.setAttribute("class", "card");

    pokeCard.addEventListener("click", function (){
        pokearea.innerHTML = ``;
        DibujarTarjeta(pokemon, zona);
    })

    pokearea.appendChild(pokeCard);
}
export default DibujarPokemon;