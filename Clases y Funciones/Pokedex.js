
import dibujarTarjetaPokemon from "./TarjetaPokemon.js"

class Pokedex {


    async dibujarPokedex(data) {

        const Pokemon = data;

        const contenedor = document.createElement("div"); 
        contenedor.setAttribute("class", "container-fluid d-flex flex-wrap justify-content-center margin-separar-navbar"); //seteamos clases en el body

        for (let i = 0; i < Pokemon.length; i++) {

            const body = document.querySelector("body"); //obtenemos el body

            const card_container = document.createElement("div"); //creamos contenedor tarjeta

            //filtramos dependiendo el color del pokemon la imagen de fondo que se insertara
            switch (Pokemon[i].color) {
                case "green":
                    card_container.setAttribute("class", "card rounded-4 fondo-verde mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "red":
                    card_container.setAttribute("class", "card rounded-4 fondo-rojo mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "blue":
                    card_container.setAttribute("class", "card rounded-4 fondo-azul mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "white":
                    card_container.setAttribute("class", "card rounded-4 fondo-blanco mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "brown":
                    card_container.setAttribute("class", "card rounded-4 fondo-cafe mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "yellow":
                    card_container.setAttribute("class", "card rounded-4 fondo-amarillo mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "purple":
                    card_container.setAttribute("class", "card rounded-4 fondo-morado mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "pink":
                    card_container.setAttribute("class", "card rounded-4 fondo-rosado mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "gray":
                    card_container.setAttribute("class", "card rounded-4 fondo-gris mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                case "black":
                    card_container.setAttribute("class", "card rounded-4 fondo-negro mx-3 my-3 shadow-moved cursor-mano card-movimiento");
                    break;
                default:
                    break;
            }
            


            card_container.addEventListener("click", () =>{
                //  DibujarTarjeta(Pokemon[i]);
                dibujarTarjetaPokemon(Pokemon[i]);
            })

            const card_body = document.createElement("div");
            card_body.setAttribute("class", "card-body");

            const row_principal = document.createElement("div");
            row_principal.setAttribute("class", "row text-end");

            const h5 = document.createElement("h5");

            //filtramos dependiendo el color el color de la letra del id

            switch (Pokemon[i].color) {
                case "green":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-verde");
                    break;
                case "red":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-rojo");
                    break;
                case "blue":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-azul");
                    break;
                case "white":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-blanco");
                    break;
                case "brown":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-cafe");
                    break;
                case "yellow":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-amarillo");
                    break;
                case "purple":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-morado");
                    break;
                case "pink":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-rosado");
                    break;
                case "gray":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-gris");
                    break;
                case "black":
                    h5.setAttribute("class", "margin-separar-abajo font-id color-negro");
                    break;
                default:
                    break;
            }
            

            const ID = Pokemon[i].id.toString();

            if (ID.length === 1) {
                h5.textContent = "N° " + "000" + ID;
            }
            else if (ID.length === 2) {
                h5.textContent = "N° " + "00" + ID;
            }
            else if (ID.length === 3) {
                h5.textContent = "N° " + "0" + ID;
            }

            const nombre = Pokemon[i].nombre;
            const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);

            const card_title = document.createElement("div");
            card_title.setAttribute("class", "row position-relative margin-separar-arriba text-center");

            const title_shadow = document.createElement("h3");

            //filtramos por color de pokemon el color que tendra el contorno del nombre del pokemon
            switch (Pokemon[i].color) {
                case "green":
                    title_shadow.setAttribute("class", "font-name contorno-verde");
                    break;
                case "red":
                    title_shadow.setAttribute("class", "font-name contorno-rojo");
                    break;
                case "blue":
                    title_shadow.setAttribute("class", "font-name contorno-azul");
                    break;
                case "white":
                    title_shadow.setAttribute("class", "font-name contorno-blanco");
                    break;
                case "brown":
                    title_shadow.setAttribute("class", "font-name contorno-cafe");
                    break;
                case "yellow":
                    title_shadow.setAttribute("class", "font-name contorno-amarillo");
                    break;
                case "purple":
                    title_shadow.setAttribute("class", "font-name contorno-morado");
                    break;
                case "pink":
                    title_shadow.setAttribute("class", "font-name contorno-rosado");
                    break;
                case "gray":
                    title_shadow.setAttribute("class", "font-name contorno-gris");
                    break;
                case "black":
                    title_shadow.setAttribute("class", "font-name contorno-negro");
                    break;
                default:
                    break;
            }            


            title_shadow.textContent = nombreCapitalizado;

            const title = document.createElement("h3");
            title.setAttribute("class", "font-name");

            title.textContent = nombreCapitalizado;

            const card_imagen = document.createElement("div");
            card_imagen.setAttribute("class", "row");

            const img = document.createElement("img");

            img.setAttribute("src", Pokemon[i].imagen);
            img.setAttribute("class", "imagen-tarjeta margin-separar-arriba margin-separar-abajo");
            img.setAttribute("alt", Pokemon[i].imagen);


            const types_container = document.createElement("div"); //principal de todos los tipos
            types_container.setAttribute("class", "row d-flex");
            
            const ArrayTypes = Pokemon[i].tipos;
            
            let ColumnType = null;
            
            for (let y = 0; y < ArrayTypes.length; y++) {

                if (y % 2 === 0) { // Cada vez que y es múltiplo de 2, crea una nueva columna
                    ColumnType = document.createElement("div");
                    ColumnType.setAttribute("class", "col d-flex flex-column"); //columna que contiene a dos tipos
                    types_container.appendChild(ColumnType);
                }
            
                const type = document.createElement("div"); //contenedor que tiene dentro el texto como tipo
                type.setAttribute("class", "d-flex align-items-center margen-acercar-arriba");

                const circle = document.createElement("p");
                const name = document.createElement("p");
            
                switch (ArrayTypes[y]) {

                    case "grass":
                    
                        circle.setAttribute("class", "font-circle color-verde contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-verde contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "poison":
                        circle.setAttribute("class", "font-circle color-morado contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-morado contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;
                            
                    case "fire":
                        circle.setAttribute("class", "font-circle color-rojo contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-rojo contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "flying":
                        circle.setAttribute("class", "font-circle color-azul contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-azul contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "water":
                        circle.setAttribute("class", "font-circle color-azul contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-azul contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "bug":
                        circle.setAttribute("class", "font-circle color-verde contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-verde contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "normal":
                        circle.setAttribute("class", "font-circle color-gris contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-gris contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "electric":
                        circle.setAttribute("class", "font-circle color-amarillo contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-amarillo contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "ground":
                        circle.setAttribute("class", "font-circle color-cafe contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-cafe contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "fairy":
                        circle.setAttribute("class", "font-circle color-rosado contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-rosado contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "fighting":
                        circle.setAttribute("class", "font-circle color-rojo contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";
    
                        name.setAttribute("class", "font-types ms-2 color-rojo contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                        
                        break;

                    case "psychic":
                        circle.setAttribute("class", "font-circle color-rosado contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-rosado contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;
                
                    case "rock":
                        circle.setAttribute("class", "font-circle color-gris contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-gris contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;
                    
                    case "steel":
                        circle.setAttribute("class", "font-circle color-gris contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-gris contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;
                    
                    case "ice":
                        circle.setAttribute("class", "font-circle color-blanco contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-blanco contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    case "ghost":
                        circle.setAttribute("class", "font-circle color-morado contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-morado contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;
                    
                    
                    case "dragon":
                        circle.setAttribute("class", "font-circle color-rojo contorno-tipos"); //decoracion antes del tipo
                        circle.textContent = "a";

                        name.setAttribute("class", "font-types ms-2 color-rojo contorno-tipos"); //tipo directo del pokemon
                        name.textContent = ArrayTypes[y];
                    
                        break;

                    default:
                        
                        break;
                }

            
                type.appendChild(circle);
                type.appendChild(name);
            
                ColumnType.appendChild(type);
            }

            card_container.appendChild(card_body);
            contenedor.appendChild(card_container);
            card_body.appendChild(row_principal).appendChild(h5);
            card_body.appendChild(card_title);
            card_title.appendChild(title_shadow);
            card_title.appendChild(title);
            card_body.appendChild(card_imagen).appendChild(img);
            card_body.appendChild(types_container);

            body.appendChild(contenedor);

        }




    }

}

export default Pokedex;