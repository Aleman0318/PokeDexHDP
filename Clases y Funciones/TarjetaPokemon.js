import insertAcomp from "./insertarAcompañante.js";


const dibujarTarjetaPokemon = (pokemon) => {

    const body = document.querySelector("body"); //obtener body

    const area = document.createElement("div");
    area.setAttribute("class", "area justify-content-center items-align-center d-flex");
    area.setAttribute("data-area", "");

    const tarjetaPokemon = document.createElement("div");

    switch (pokemon.color) {
        case "green":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-verde-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;
        case "red":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-rojo-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "blue":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-azul-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "white":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-blanco-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "brown":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-cafe-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "yellow":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-amarillo-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "purple":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-morado-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "pink":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-rosado-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "gray":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-gris-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;

        case "black":
            tarjetaPokemon.setAttribute("class", "card tamaño-tarjeta-principal fondo-negro-principal container-fluid margen-acercar-arriba card-movimiento br-info");
            break;
        default:
            break;
    }

    const filaBotones = document.createElement("div"); //fila que contendra los botones
    filaBotones.setAttribute("class", "row flex-row align-items-center")

    const col_volver = document.createElement("div"); //columna del boton volver
    col_volver.setAttribute("class", "col flex-column");

    const btn_volver = document.createElement("button"); //boton volver
    btn_volver.setAttribute("class", "btn_volver justify-content-center align-items-center d-flex mt-1 mx-3")


    //icono del boton volver
    const icono_volver = document.createElement("img");
    icono_volver.setAttribute("src", "/Resources/icono-volver.png");
    icono_volver.setAttribute("class", "icono-volver")


    const col_pokebola = document.createElement("div"); //columna para boton pokebola
    col_pokebola.setAttribute("class", "col d-flex justify-content-end");

    const btn_pokebola = document.createElement("button"); //boton pokebola
    btn_pokebola.setAttribute("class", "btn_pokebola justify-content-center align-items-center d-flex mt-1 mx-2");

    btn_pokebola.addEventListener("click", () => {
        insertAcomp(pokemon);
        window.location.reload();
    })

    //icono pokebola
    const icono_pokebola = document.createElement("img");
    icono_pokebola.setAttribute("src", "/Resources/pokebola.png");
    icono_pokebola.setAttribute("class", "icono-pokebola")


    //este row contendra las columnas de id y de nombre
    const fila_id_nombre = document.createElement("div");
    fila_id_nombre.setAttribute("class", "row flex-row align-items-center mt-3");

    //columna que contendra el nombre
    const col_nombre = document.createElement("div");
    col_nombre.setAttribute("clas", "col d-flex flex-wrap");


    const nombre = pokemon.nombre;
    const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    //nombre
    const h3_Contorno = document.createElement("h3");
    h3_Contorno.textContent = nombreCapitalizado;



    switch (pokemon.color) {
        case "green":
            h3_Contorno.setAttribute("class", "contorno-verde-principal font-name-principal ms-2"); break;
        case "red":
            h3_Contorno.setAttribute("class", "contorno-rojo-principal font-name-principal ms-2"); break;

        case "blue":
            h3_Contorno.setAttribute("class", "contorno-azul-principal font-name-principal ms-2"); break;

        case "white":
            h3_Contorno.setAttribute("class", "contorno-blanco-principal font-name-principal ms-2"); break;

        case "brown":
            h3_Contorno.setAttribute("class", "contorno-cafe-principal font-name-principal ms-2"); break;

        case "yellow":
            h3_Contorno.setAttribute("class", "contorno-amarillo-principal font-name-principal ms-2"); break;

        case "purple":
            h3_Contorno.setAttribute("class", "contorno-morado-principal font-name-principal ms-2"); break;

        case "pink":
            h3_Contorno.setAttribute("class", "contorno-rosado-principal font-name-principal ms-2"); break;

        case "gray":
            h3_Contorno.setAttribute("class", "contorno-gris-principal font-name-principal ms-2"); break;

        case "black":
            h3_Contorno.setAttribute("class", "contorno-negro-principal font-name-principal ms-2"); break;
        default:
            break;
    }

    //contorno de nombre
    const h3_Nombre = document.createElement("h3");
    h3_Nombre.textContent = nombreCapitalizado;
    h3_Nombre.setAttribute("class", "font-name-principal ms-2");


    //columna que contendra el ID
    const col_id = document.createElement("div");
    col_id.setAttribute("class", "col d-flex flex-wrap justify-content-end me-3");

    //id
    const h4_id = document.createElement("h4");


    switch (pokemon.color) {
        case "green":
            h4_id.setAttribute("class", "color-verde font-id-principal d-flex");
            break;
        case "red":
            h4_id.setAttribute("class", "color-rojo font-id-principal d-flex");
            break;

        case "blue":

            h4_id.setAttribute("class", "color-azul font-id-principal d-flex"); break;

        case "white":
            h4_id.setAttribute("class", "color-blanco font-id-principal d-flex"); break;

        case "brown":
            h4_id.setAttribute("class", "color-cafe font-id-principal d-flex"); break;

        case "yellow":
            h4_id.setAttribute("class", "color-amarillo font-id-principal d-flex"); break;

        case "purple":
            h4_id.setAttribute("class", "color-morado font-id-principal d-flex"); break;

        case "pink":
            h4_id.setAttribute("class", "color-rosado font-id-principal d-flex"); break;

        case "gray":
            h4_id.setAttribute("class", "color-gris font-id-principal d-flex"); break;

        case "black":
            h4_id.setAttribute("class", "color-negro font-id-principal d-flex"); break;
        default:
            break;
    }

    if (contarCifras(pokemon.id) == 1) {
        h4_id.textContent = "000" + pokemon.id;
    }
    else if (contarCifras(pokemon.id) == 2) {
        h4_id.textContent = "00" + pokemon.id;
    }
    else if (contarCifras(pokemon.id) == 3) {
        h4_id.textContent = "0" + pokemon.id;
    }

    //row que contendra la imagen del pokemon
    const fila_imagen = document.createElement("div");
    fila_imagen.setAttribute("class", "row align-items-center d-flex justify-content-start");

    //columna que contendra la imagen
    const col_imagen = document.createElement("div");
    col_imagen.setAttribute("class", "col d-flex align-items-center");
    col_imagen.setAttribute("data-image", "");

    //imagen pokemon
    const imagenPokemon = document.createElement("img");
    imagenPokemon.setAttribute("src", pokemon.imagen);
    imagenPokemon.setAttribute("alt", pokemon.nombre);
    imagenPokemon.setAttribute("class", "imagen-tarjeta-principal d-flex")

    //asignacion de hijos
    col_nombre.appendChild(h3_Contorno);
    col_nombre.appendChild(h3_Nombre);

    col_id.appendChild(h4_id);

    fila_id_nombre.appendChild(col_nombre);
    fila_id_nombre.appendChild(col_id);

    col_imagen.appendChild(imagenPokemon);
    fila_imagen.appendChild(col_imagen);

    //columna que contendra los tipos pokemons
    const col_tipos = document.createElement("div");
    col_tipos.setAttribute("class", "col d-flex justify-content-center align-items-center");


    const arrayTipos = pokemon.tipos;


    //tipos
    for (let i = 0; i < arrayTipos.length; i++) {

        let tipo = document.createElement("p");
        tipo.setAttribute("class", "font-types-principal d-flex");
        tipo.textContent = arrayTipos[i];

        let decoracion_tipo = document.createElement("p");
        decoracion_tipo.setAttribute("class", "font-circle-principal d-flex ms-1 margin-separar-arriba-corto")
        decoracion_tipo.textContent = "a";


        col_tipos.appendChild(decoracion_tipo);
        col_tipos.appendChild(tipo);

    }

    fila_imagen.appendChild(col_tipos);


    //fila que contendra la informacion
    const fila_info = document.createElement("div");
    fila_info.setAttribute("class", "row align-items-center d-flex");

    //tarjeta que contiene la info de los pokemons
    const divInfo = document.createElement("div");
    divInfo.setAttribute("class", "card tamaño-tarjeta-info br-info margen-acercar-arriba-principal");

    //fila que cntendra las opciones de la info
    const FilaNavOpciones = document.createElement("div");
    FilaNavOpciones.setAttribute("class", "row align-items-center d-flex justify-content-between");

    //boton about
    const btn_about = document.createElement("button");
    btn_about.setAttribute("class", "btnOp active");
    btn_about.textContent = "About";

    //boton stats
    const btn_stats = document.createElement("button");
    btn_stats.setAttribute("class", "btnOp");
    btn_stats.textContent = "Base Stats";

    //boton moves
    const btn_Moves = document.createElement("button");
    btn_Moves.setAttribute("class", "btnOp");
    btn_Moves.textContent = "Moves";

    // Agrupar los botones en un array
    const buttons = [btn_about, btn_stats, btn_Moves];

    // Función para manejar el clic en los botones
    function handleButtonClick(event) {
        // Remover la clase 'active' de todos los botones
        buttons.forEach(button => button.classList.remove('active'));

        // Añadir la clase 'active' al botón clickeado
        event.target.classList.add('active');
    }

    // Añadir el evento de clic a cada botón
    buttons.forEach(button => button.addEventListener('click', handleButtonClick));



    const contenedorInfo = document.createElement("div");
    contenedorInfo.setAttribute("class", "d-flex margin-separar-arriba flex-column");

    const filaTemaData = document.createElement("p");
    filaTemaData.setAttribute("class", "font-data ms-2")
    filaTemaData.textContent = "Data"

    //filas de datos para mostrar en pokemon specie
    const filaEspecie = document.createElement("div");
    filaEspecie.setAttribute("class", "row align-items-center d-flex");

    const columna_especie1 = document.createElement("div");
    columna_especie1.setAttribute("class", "col d-flex justify-content-start col-3 ms-2");

    const specieNombre = document.createElement("p");
    specieNombre.setAttribute("class", "font-info fondo-blur-datos");
    specieNombre.textContent = "Species";

    const columna_especie2 = document.createElement("div");
    columna_especie2.setAttribute("class", "col d-flex justify-content-start");

    const specieDato = document.createElement("p");
    specieDato.setAttribute("class", "font-info fw-bold");
    specieDato.textContent = pokemon.especies;

    filaEspecie.appendChild(columna_especie1).appendChild(specieNombre);
    filaEspecie.appendChild(columna_especie2).appendChild(specieDato);

    //################################################

    const filaHeight = document.createElement("div");
    filaHeight.setAttribute("class", "row align-items-center d-flex");

    const columna_height1 = document.createElement("div");
    columna_height1.setAttribute("class", "col d-flex justify-content-start col-3 ms-2");

    const heightNombre = document.createElement("p");
    heightNombre.setAttribute("class", "font-info fondo-blur-datos");
    heightNombre.textContent = "Height";

    const columna_height2 = document.createElement("div");
    columna_height2.setAttribute("class", "col d-flex justify-content-start");

    const heightDato = document.createElement("p");
    heightDato.setAttribute("class", "font-info fw-bold");
    const alturaDecimal = pokemon.altura / 100;
    heightDato.textContent = pokemon.altura + " cm " + `(${alturaDecimal.toFixed(2)} m)`;

    filaHeight.appendChild(columna_height1).appendChild(heightNombre);
    filaHeight.appendChild(columna_height2).appendChild(heightDato);

    //#####################################################

    const filaWeight = document.createElement("div");
    filaWeight.setAttribute("class", "row align-items-center d-flex");

    const columna_weight1 = document.createElement("div");
    columna_weight1.setAttribute("class", "col d-flex justify-content-start col-3 ms-2");

    const weightNombre = document.createElement("p");
    weightNombre.setAttribute("class", "font-info fondo-blur-datos");
    weightNombre.textContent = "Weight";

    const columna_weight2 = document.createElement("div");
    columna_weight2.setAttribute("class", "col d-flex justify-content-start");

    const weightDato = document.createElement("p");
    weightDato.setAttribute("class", "font-info fw-bold");
    const pesoRedondeado = Math.round(pokemon.peso * 2.20462);
    weightDato.textContent = pokemon.peso + " kg " + `(${pesoRedondeado.toFixed(2)} lbs)`;


    filaWeight.appendChild(columna_weight1).appendChild(weightNombre);
    filaWeight.appendChild(columna_weight2).appendChild(weightDato);

    //###############################################################

    const filaAbilities = document.createElement("div");
    filaAbilities.setAttribute("class", "row align-items-center d-flex");

    const columna_ability1 = document.createElement("div");
    columna_ability1.setAttribute("class", "col d-flex justify-content-start col-3 ms-2");

    const abilityNombre = document.createElement("p");
    abilityNombre.setAttribute("class", "font-info fondo-blur-datos");
    abilityNombre.textContent = "Abilities";

    const columna_ability2 = document.createElement("div");
    columna_ability2.setAttribute("class", "col d-flex justify-content-start");

    const abilityDato = document.createElement("p");
    abilityDato.setAttribute("class", "font-info fw-bold");
    const habilidadesFormateadas = pokemon.habilidades.join(', '); //le damos espacio entre ellas para que no se peguen con la coma
    abilityDato.textContent = habilidadesFormateadas;


    filaAbilities.appendChild(columna_ability1).appendChild(abilityNombre);
    filaAbilities.appendChild(columna_ability2).appendChild(abilityDato);

    //###############################################################

    const filaDebilities = document.createElement("div");
    filaDebilities.setAttribute("class", "row align-items-center d-flex");

    const columna_debility1 = document.createElement("div");
    columna_debility1.setAttribute("class", "col d-flex justify-content-start col-3 ms-2");

    const debilityNombre = document.createElement("p");
    debilityNombre.setAttribute("class", "font-info fondo-blur-datos");
    debilityNombre.textContent = "Weaknesses";

    const columna_debility2 = document.createElement("div");
    columna_debility2.setAttribute("class", "col d-flex justify-content-start");

    const debilityDato = document.createElement("p");
    debilityDato.setAttribute("class", "font-info fw-bold");
    const debilidadesFormateadas = pokemon.debilidades.join(', '); //le damos espacio entre ellas para que no se peguen con la coma
    debilityDato.textContent = debilidadesFormateadas;


    filaDebilities.appendChild(columna_debility1).appendChild(debilityNombre);
    filaDebilities.appendChild(columna_debility2).appendChild(debilityDato);

    //##############################################################


    const filaTemaBreeding = document.createElement("p");
    filaTemaBreeding.setAttribute("class", "font-data ms-2")
    filaTemaBreeding.textContent = "Breeding"


    //#######################################################################

    const filaEggs = document.createElement("div");
    filaEggs.setAttribute("class", "row align-items-center d-flex");

    const columna_egg1 = document.createElement("div");
    columna_egg1.setAttribute("class", "col d-flex justify-content-start col-3 ms-2");

    const eggNombre = document.createElement("p");
    eggNombre.setAttribute("class", "font-info fondo-blur-datos");
    eggNombre.textContent = "Egg Groups";

    const columna_egg2 = document.createElement("div");
    columna_egg2.setAttribute("class", "col d-flex justify-content-start");

    const eggDato = document.createElement("p");
    eggDato.setAttribute("class", "font-info fw-bold");
    const eggsFormateadas = pokemon.grupoHuevos.join(', '); //le damos espacio entre ellas para que no se peguen con la coma
    eggDato.textContent = eggsFormateadas;


    filaEggs.appendChild(columna_egg1).appendChild(eggNombre);
    filaEggs.appendChild(columna_egg2).appendChild(eggDato);

    //este debe contener todos las filas que contienen los datos del pokemon
    contenedorInfo.appendChild(filaTemaData);
    contenedorInfo.appendChild(filaEspecie);
    contenedorInfo.appendChild(filaHeight);
    contenedorInfo.appendChild(filaWeight);
    contenedorInfo.appendChild(filaAbilities);
    contenedorInfo.appendChild(filaDebilities);
    contenedorInfo.appendChild(filaTemaBreeding);
    contenedorInfo.appendChild(filaEggs);


    //asignacion de hijos
    FilaNavOpciones.appendChild(btn_about);
    FilaNavOpciones.appendChild(btn_stats);
    FilaNavOpciones.appendChild(btn_Moves);

    divInfo.appendChild(FilaNavOpciones);

    divInfo.appendChild(contenedorInfo);

    fila_info.appendChild(divInfo);

    col_volver.appendChild(btn_volver).appendChild(icono_volver);
    col_pokebola.appendChild(btn_pokebola).appendChild(icono_pokebola);

    filaBotones.appendChild(col_volver);
    filaBotones.appendChild(col_pokebola);


    tarjetaPokemon.appendChild(filaBotones);
    tarjetaPokemon.appendChild(fila_id_nombre);
    tarjetaPokemon.appendChild(fila_imagen);
    tarjetaPokemon.appendChild(fila_info);

    area.appendChild(tarjetaPokemon);

    let segundoHijo = body.childNodes[1];

    body.insertBefore(area, segundoHijo.nextSibling);

    window.onload = function () {
        document.getElementById("botonCard").classList.add("active");
    };



    btn_volver.addEventListener("click", () => {
        const areaDiv = document.querySelector('[data-area]');
        if (areaDiv) {
            areaDiv.remove();
        }
    })

}



function contarCifras(numero) {
    return Math.abs(numero).toString().length;
}

export default dibujarTarjetaPokemon