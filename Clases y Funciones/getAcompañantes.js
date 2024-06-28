
import dibujarAcomp from "./dibujarAcompañantes.js";

const obtenerAcompañantes = () => {
    let request = indexedDB.open("pokemons", 1);

    request.onsuccess = (event) =>{
        let db = event.target.result;
        let transaction = db.transaction("acompañantes", "readonly");
        let objectStore = transaction.objectStore("acompañantes");

        let requestCount = objectStore.count();

        requestCount.onsuccess = () =>{
            if(requestCount.result === 0 ){
                
            }
            else{
                let getAllRequest = objectStore.getAll();

                getAllRequest.onsuccess = function (event) {
                    let allData = event.target.result;
                    
                    dibujarAcomp(allData);
                    
                };

                getAllRequest.onerror = function (event){
                    console.error("Ocurrio un error al obtener los acompañantes: ", event.target.error);
                }
            }
        }
        
        requestCount.onerror = (event) =>{
            console.error("Ocurrio un error al obtener los acompañantes: ", event.target.error);
        }
    }
}

export default obtenerAcompañantes;