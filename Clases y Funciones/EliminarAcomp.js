
const DeleteAcomp = (pokemon) => {
    let request = indexedDB.open("pokemons", 1);

    request.onsuccess = (event) =>{
        let db = event.target.result;
        let transaction = db.transaction("acompañantes", "readwrite");
        let objectStore = transaction.objectStore("acompañantes");

        let request = objectStore.delete(pokemon.id);
        
        request.onsuccess = () =>{
            console.log("Acompañante Eliminado con Éxito");
            window.location.reload();
        }

    }
}

export default DeleteAcomp;