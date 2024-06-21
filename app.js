import cargarDatos from "./JavaScript/CargarDatos.js"


document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        cargarPokedex();
        document.getElementById('viewAcompanantes').addEventListener('click', () => {
            window.location.href = 'acompanantes.html';
        });
    } else if (window.location.pathname.endsWith('acompanantes.html')) {
        cargarAcompanantes();
        document.getElementById('backToPokedex').addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});

let acompanantes = JSON.parse(localStorage.getItem('acompanantes')) || [];
let idParaCambiar = null;

async function cargarPokedex() {
    const pokedexContainer = document.getElementById('pokedex');
    const Pokemon = await cargarDatos();
    for (let i = 0; i < Pokemon.length; i++) {

        const card = crearTarjetaPokemon(Pokemon[i]);
        pokedexContainer.appendChild(card);
    }
}

async function obtenerPokemon(id) {
    for (let i = 0; i <= Pokemon.length; i++) {

        if (Pokemon[i].getID() == id) {

            return Pokemon[i];
        }

    }
}


function agregarAcompanante(id) {
    if (acompanantes.includes(id)){
        alert('El Pokémon ya está en la lista.');
    }
    else if (acompanantes.length < 6) {
        acompanantes.push(id);
        localStorage.setItem('acompanantes', JSON.stringify(acompanantes));
    }
    else{
        alert('Ya tienes 6 acompanantes.');
    }
} 

function crearTarjetaPokemon(pokemon) {

    card.classList.add('pokemon-card');
    card.innerHTML = `
        <img src="${pokemon.getImagen()}" alt="${pokemon.getName()}">
        <h2>${pokemon.getName()}</h2>
        <button onclick="agregarAcompanante(${pokemon.getID()})">Agregar como Acompanante</button>
    `;
    return card;

    const card = document.createElement('div');
    card.setAttribute("class", "pokemon-card");

    const img = document.createElement("img");
    img.setAttribute("src", pokemon.getImagen());
    img.setAttribute("alt", pokemon.getName());

}



async function cargarAcompanantes() {
    const tableBody = document.querySelector('#acompanantesTable tbody');
    tableBody.innerHTML = '';
    for (const id of acompanantes) {
        const pokemon = await obtenerPokemon(id); //
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${pokemon.getImagen()}" alt="${pokemon.getName()}"></td>  
            <td>${pokemon.getName()}</td> 
            <td>
                <button onclick="cambiarAcompanante(${id})">Cambiar</button>
                <button onclick="eliminarAcompanante(${id})">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    }
}

function cambiarAcompanante(id) {
    idParaCambiar = id;
    document.getElementById('changePokemonContainer').style.display = 'block';
    cargarOpcionesPokemon();
}

async function cargarOpcionesPokemon() {
    const pokemonOptionsContainer = document.getElementById('pokemonOptions');
    const arrayPokemon = await cargarDatos();
    pokemonOptionsContainer.innerHTML = '';
    for (let i = 1; i < arrayPokemon; i++) {
        const pokemon = obtenerPokemon(i);
        const optionCard = document.createElement('div');
        optionCard.classList.add('pokemon-card');
        optionCard.innerHTML = `
            <img src="${pokemon.getImagen()}" alt="${pokemon.getName()}">
            <h2>${pokemon.getName()}</h2> 
            <button onclick="confirmarCambio(${pokemon.getID()})">Seleccionar</button>
        `;
        pokemonOptionsContainer.appendChild(optionCard);
    }
}



function confirmarCambio(nuevoId) {
    if (acompanantes.includes(nuevoId)) {
        alert('Este pokemon ya ha sido seleccionado anteriormente.');
    } else {
        const index = acompanantes.indexOf(idParaCambiar);
        if (index !== -1) {
            acompanantes[index] = nuevoId;
            localStorage.setItem('acompanantes', JSON.stringify(acompanantes));
            cargarAcompanantes();
            cancelarCambio();
        } else {
            alert('Error al cambiar el acompañante.');
        }
    }
}

function cancelarCambio() {
    document.getElementById('changePokemonContainer').style.display = 'none';
    idParaCambiar = null;
}

function eliminarAcompanante(id) {
    acompanantes = acompanantes.filter(ac => ac !== id);
    localStorage.setItem('acompanantes', JSON.stringify(acompanantes));
    cargarAcompanantes();
}
