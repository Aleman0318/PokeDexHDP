import btnAbout from "./btn-about.js";
import btnEvo from "./btn-evo.js";
import btnRegIni from "./btn-regresar.js";
import btnStast from "./btn-stats.js";
import btnMoves from "./btn-moves.js";

const DibujarTarjeta = (pokemon, zona) => {
    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("POKE-TARJETA", "");

    const pokearea = document.querySelector("[POKE-AREA]");
    const regre = document.createElement("button");

    if(zona === "poke-zona"){
        regre.innerHTML = `<label>regresar</label>`;
        regre.setAttribute("BTN-REG-PRINC", "");
    }if(zona === "poke-acompa"){
        regre.innerHTML = `<label>regresar</label>`;
        regre.setAttribute("BTN-REG-ACOMPA", "");
    };
    
    

    let tiposP = pokemon.types;
    let tipos = [];
                
    for (let i = 0; i < tiposP.length; i++) {
        tipos[i] = `<h3 class="${tiposP[i].type.name} tipo">${tiposP[i].type.name}</h3>`;
    }

    tipos = tipos.join('');

    tarjeta.innerHTML = `
        <nav class="btn-arriba-basic" POKE-NAV>
            <div BTN-OTROS>
                <button BTN-ADD-FAVO>favoritos</button>
                <button BTN-ADD-POKE>capturar</button>
            </div>
        </nav>
        <div class="poke-basic-stats" POKE-IMG>
            
            <div class="img-nombre">
                
                <div class="img-poke">
                    <h3 class="txt-arriba">${pokemon.name}</h3>
                    <img class="tama-poke-img" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                </div>
                <div class="poke-nombre-tipos">
                    <h1 class="txt-poke-id">${pokemon.id}</h1>
                    <div class="tarj-tipos">
                        ${tipos}
                    </div>
                </div>
            </div>
        </div>
        <div POKE-STATS>
            <nav class="nav-stats" POKE-NAV>
                <button class"btn-sts" BTN-POKE-ABOUT>about</button>
                <button class"btn-sts" BTN-BASE-STATS>base stats</button>
                <button class"btn-sts" BTN-EVOLUTION>evolution</button>
                <button class"btn-sts" BTN-POKE-MOVES>moves</button>
            </nav>
            <div class="poke-datos" POKE-DATOS>
                
            </div>
        </div>
    `;

    tarjeta.setAttribute("class", "poke-tarjeta");

    const block = document.createElement("div");
    block.setAttribute("class", "block-conten");

    pokearea.appendChild(block);
    pokearea.appendChild(tarjeta);

    const about = document.querySelector("[BTN-POKE-ABOUT]");
    about.addEventListener("click", function (){
        btnAbout(pokemon);
    });

    const stats = document.querySelector("[BTN-BASE-STATS]");
    stats.addEventListener("click", function (){
        btnStast(pokemon);
    });

    const evo = document.querySelector("[BTN-EVOLUTION]");
    evo.addEventListener("click", function (){
        btnEvo(pokemon);
    });

    const moves = document.querySelector("[BTN-POKE-MOVES]");
    moves.addEventListener("click", function (){
        btnMoves(pokemon);
    });

    const navb = document.querySelector("[POKE-NAV]");

    regre.addEventListener("click", function () {
        btnRegIni();
    });

    navb.appendChild(regre);

    
}
export default DibujarTarjeta;