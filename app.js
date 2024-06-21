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
    for (let i = 1; i <= 150; i++) {
        const pokemon = await obtenerPokemon(i); // = await cargarDatos(); Este const pokemon, se vuelve un array asi que NO seria en For
        const card = crearTarjetaPokemon(pokemon);
        pokedexContainer.appendChild(card);
    }
}

async function obtenerPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); // Todo esto se convierte en el for/if
    return response.json();
}

/*

    for (let i = 1; i <= Pokemon.length; i++) {

    if (Pokemon[i].getID() == id ){

        return Pokemon[i];
    }
    
    }

*/

function crearTarjetaPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"> // El src = Pokemon[i].getImagen(); alt= Pokemon[i].getName(); 
        <h2>${pokemon.name}</h2> // 
        <button onclick="agregarAcompanante(${pokemon.id})">Agregar como Acompanante</button> // Pokemon[i].getId();
    `;
    return card;
}

function agregarAcompanante(id) {
    if (acompanantes.length < 6 && !acompanantes.includes(id)) {
        acompanantes.push(id);
        localStorage.setItem('acompanantes', JSON.stringify(acompanantes));
    } else {
        alert('Ya tienes 6 acompanantes o el Pokémon ya está en la lista.');
    }
} // To nice

async function cargarAcompanantes() {
    const tableBody = document.querySelector('#acompanantesTable tbody');
    tableBody.innerHTML = '';
    for (const id of acompanantes) {
        const pokemon = await obtenerPokemon(id); //
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></td> // Pokemon[i].getImagen(); alt= Pokemon[i].getName(); 
            <td>${pokemon.name}</td> //Pokemon[i].getName();
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
    pokemonOptionsContainer.innerHTML = '';
    for (let i = 1; i <= 150; i++) {
        const pokemon = await obtenerPokemon(i); // await cargarDatos();
        const optionCard = document.createElement('div');
        optionCard.classList.add('pokemon-card');
        optionCard.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"> // Pokemon[i].getImagen(); alt= Pokemon[i].getName();
            <h2>${pokemon.name}</h2> // Pokemon[i].getName();
            <button onclick="confirmarCambio(${pokemon.id})">Seleccionar</button> // getid
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



/* 
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
    for (let i = 1; i <= 150; i++) {
        const pokemon = await obtenerPokemon(i);
        const card = crearTarjetaPokemon(pokemon);
        pokedexContainer.appendChild(card);
    }
}

async function obtenerPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
}

function crearTarjetaPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <button onclick="agregarAcompanante(${pokemon.id})">Agregar como Acompanante</button>
    `;
    return card;
}

function agregarAcompanante(id) {
    if (acompanantes.length >= 6) {
        alert('Ya tienes 6 acompañantes.');
        return;
    }

    if (!acompanantes.includes(id)) {
        acompanantes.push(id);
        localStorage.setItem('acompanantes', JSON.stringify(acompanantes));
    } else {
        alert('El Pokémon ya está en la lista.');
    }
}

async function cargarAcompanantes() {
    const tableBody = document.querySelector('#acompanantesTable tbody');
    tableBody.innerHTML = '';
    for (const id of acompanantes) {
        const pokemon = await obtenerPokemon(id);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></td>
            <td>${pokemon.name}</td>
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
    pokemonOptionsContainer.innerHTML = '';
    for (let i = 1; i <= 150; i++) {
        const pokemon = await obtenerPokemon(i);
        const optionCard = document.createElement('div');
        optionCard.classList.add('pokemon-card');
        optionCard.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <button onclick="confirmarCambio(${pokemon.id})">Seleccionar</button>
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





<h2>Entrenadores</h2>
<div id="entrenadoresContainer">
    <button onclick="mostrarFormularioEntrenador()">Añadir Entrenador</button>
    <div id="formularioEntrenador" style="display: none;">
        <input type="text" id="nombreEntrenador" placeholder="Nombre del Entrenador">
        <button onclick="agregarEntrenador()">Guardar</button>
        <button onclick="ocultarFormularioEntrenador()">Cancelar</button>
    </div>
    <ul id="listaEntrenadores"></ul>
</div>

*/