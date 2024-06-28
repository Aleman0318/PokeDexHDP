import DeleteAcomp from "../Clases y Funciones/EliminarAcomp.js";

const dibujarAcomp = (pokemons) => {

    const Pokemons = pokemons;

    for (let i = 0; i < Pokemons.length; i++) {

        const container = document.querySelector("[data-acomp]");

        const filaContenedor = document.createElement("div");
        filaContenedor.setAttribute("class", "row justify-content-between text-center mt-2 gap-3");

        const colID = document.createElement("div");
        colID.setAttribute("class", "col font-data align-items-center justify-content-center text-center");
        colID.textContent = Pokemons[i].id;

        const colName = document.createElement("div");
        colName.setAttribute("class", "col font-data align-items-center justify-content-center text-center");

        const name = document.createElement("p");
        name.setAttribute("class", "font-name-acomp")
        name.textContent = Pokemons[i].nombre;

        const colImage = document.createElement("div");
        colImage.setAttribute("class", "col font-data align-items-center justify-content-center text-center");
        
        const img = document.createElement("img");
        img.setAttribute("src", Pokemons[i].image);
        img.setAttribute("alt", Pokemons[i].nombre);
        img.setAttribute("class", "imagen-acomp");

        const col_op = document.createElement("div");
        col_op.setAttribute("class", "col font-data align-items-center justify-content-around text-center d-flex");

        const btn_cambiar = document.createElement("button");
        btn_cambiar.setAttribute("class", "btn-modificar")
        btn_cambiar.textContent = "Cambiar Pokemón";

        const btn_eliminar = document.createElement("button");
        btn_eliminar.setAttribute("class", "btn-eliminar")
        btn_eliminar.textContent = "Eliminar Pokemón";

        btn_eliminar.addEventListener("click", () =>{ //metodo elimina
            DeleteAcomp(Pokemons[i]);
        })

        btn_cambiar.addEventListener("click", () =>{
            //tristemente
        })

        col_op.appendChild(btn_cambiar);
        col_op.appendChild(btn_eliminar);

        filaContenedor.appendChild(colID);
        filaContenedor.appendChild(colName).appendChild(name);
        filaContenedor.appendChild(colImage).appendChild(img);
        filaContenedor.appendChild(col_op);

        container.appendChild(filaContenedor);

    }

}

export default dibujarAcomp;