const btnAbout = (pokemon) =>{
    const pokedatos = document.querySelector("[POKE-DATOS]");

    pokedatos.innerHTML = ``;

    pokedatos.innerHTML = `
        <h1>Estamos en about.</h1>
        <h3>${pokemon.name}</h3>
    `;
}
export default btnAbout;