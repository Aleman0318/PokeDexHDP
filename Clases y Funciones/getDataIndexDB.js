import Pokedex from "./Pokedex.js";

const ExtraerDatosDB = () => {

    const p = new Pokedex();

    // Abre (o crea) la base de datos
    let request = indexedDB.open("pokemons", 1);

    request.onsuccess = function (event) {
        let db = event.target.result;
        let transaction = db.transaction("datos", "readonly");
        let objectStore = transaction.objectStore("datos");

        // Obtiene todos los datos del objectStore
        let getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = function (event) {
            let allData = event.target.result;
            
            p.dibujarPokedex(allData);
        };

        getAllRequest.onerror = function (event) {
            console.error("Error al obtener los datos:", event.target.error);
        };
    };

    request.onerror = function (event) {
        console.error("Error al abrir la base de datos:", event.target.error);
    };

}

export default ExtraerDatosDB;