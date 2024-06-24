const btnRegIni = () =>{
    const pokearea = document.querySelector("[POKE-AREA]");
    const tarjeta = document.querySelector("[POKE-TARJETA]");
    const block = document.querySelector(".block-conten");

    const throwawayNode = pokearea.removeChild(tarjeta);
    throwawayNode = pokearea.removeChild(block);
}
export default btnRegIni;