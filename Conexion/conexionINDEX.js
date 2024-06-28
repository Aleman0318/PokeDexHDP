
import cargarDatos from "../JavaScript/CargarDatos.js";
import ExtraerDatosDB from "../Clases y Funciones/getDataIndexDB.js";

const openRequest = indexedDB.open("pokemons", 1); // Creando base de datos

// Verificar si la tabla existe y si no, crearla
openRequest.onupgradeneeded = function (event) {
    const db = event.target.result;

    if (!db.objectStoreNames.contains("datos")) {
        db.createObjectStore("datos", { keyPath: 'id', autoIncrement: true });
    }
}

openRequest.onsuccess = async function (event) {
    const db = event.target.result;

    db.onversionchange = function () {
        db.close();
        alert("La base de datos no está en la versión más actualizada");
    }

    // Verificar si la tabla ya contiene elementos
    const transaction = db.transaction("datos", "readonly");
    const tbl_datos = transaction.objectStore("datos");

    const countRequest = tbl_datos.count();

    countRequest.onsuccess = async function () {

        if (countRequest.result == 0) {

            console.log("Cargando Datos...");
            // Si no hay datos, cargar e insertar los datos
            const arrayPokemons = await cargarDatos();

            const transaction = db.transaction("datos", "readwrite");

            transaction.oncomplete = function () {
                console.log("Transacción completada con éxito");
            }

            transaction.onerror = function (event) {
                console.log("Error en la transacción: ", event.target.error);
            }

            const tbl_datos = transaction.objectStore("datos");

            // Convertir e insertar los datos
            for (let i = 0; i < arrayPokemons.length; i++) {
                let pokemon = arrayPokemons[i];
                let request = tbl_datos.add(pokemon.toJSON()); // Convertir a JSON

                request.onsuccess = function () {
                    console.log("Pokemon agregado con éxito");
                }

                request.onerror = function () {
                    console.log("Error al agregar pokemon: ", request.error);
                }
            }

            alert("Recargaremos la página para cargar la pokedex...");
            window.location.reload();

        } else {
            console.log("La tabla ya contiene datos, no se insertarán nuevos datos.");
            ExtraerDatosDB();
        }
    }

    countRequest.onerror = function (event) {
        console.log("Error al contar los datos: ", event.target.error);
    }
}



