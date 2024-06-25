const test = () => {
    const div = document.createElement("div");
    div.innerHTML = `
        
        <div class="col1" COL-POKE>
            <div class="navbar" NAV-POKE>
                <div class="buscar">
                    <h3 class="pokebuscar">Pokemon</h3>
                    <input type="text" class="poke-input" INPUT id="pokeinput">
                </div>
            </div>
            
            <div>
                <div class="pokearea" POKE-AREA>
                
                </div>
            </div>

        </div>
    `;

    const zona = document.querySelector("body");

    zona.appendChild(div)
}
export default test;