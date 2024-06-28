const insertAcomp = (pokemon) => {
    const openRequest = indexedDB.open("pokemons", 1);

    openRequest.onsuccess = function (event) {
        const db = event.target.result;

        db.onversionchange = function () {
            db.close();
            alert("La base de datos no está en la versión más actualizada");
        };

        const transaction = db.transaction("acompañantes", "readwrite");
        const tbl_acomp = transaction.objectStore("acompañantes");

        const countRequest = tbl_acomp.count();

        countRequest.onsuccess = () => {
            if (countRequest.result < 6) {

                // Verificamos si el Pokémon ya existe
                const getRequest = tbl_acomp.get(pokemon.id);

                getRequest.onsuccess = function() {
                    if (getRequest.result) {
                        // El Pokémon ya existe
                        alert("Este Pokémon ya ha sido agregado como acompañante.");
                    } else {
                        // El Pokémon no existe, lo insertamos
                        const PokeAcompañante = {
                            id: pokemon.id,
                            image: pokemon.imagen,
                            nombre: pokemon.nombre
                        };

                        const addRequest = tbl_acomp.add(PokeAcompañante);

                        addRequest.onsuccess = function () {
                            console.log("Acompañante agregado con éxito");
                        };

                        addRequest.onerror = function () {
                            console.error("Error al agregar Acompañante: ", addRequest.error);
                        };
                    }
                };

                getRequest.onerror = function() {
                    console.error("Error al verificar el Pokémon existente: ", getRequest.error);
                };
            } else {
                alert("Ya has añadido el máximo de acompañantes (6)");
            }
        };

        transaction.oncomplete = function () {
            console.log("Transacción acompañante completada con éxito");
            db.close();
        };

        transaction.onerror = function (event) {
            console.error("Error en la transacción de acompañante: ", event.target.error);
        };
    };

    openRequest.onerror = function (event) {
        console.error("Error al abrir la base de datos: ", event.target.error);
    };
};

export default insertAcomp;