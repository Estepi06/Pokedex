// Seleccionamos los elementos del HTML
let divContenedor = document.querySelector("#contenedor");
let btnBuscar = document.querySelector("#btnBuscar");
let inputNombre = document.querySelector("#pokemonInput");

// Evento al hacer clic en el botón Buscar
btnBuscar.addEventListener("click", async () => {
    let nombreBuscado = inputNombre.value.trim();

    if (nombreBuscado === "") {
        alert("Escribe el nombre de un Pokémon primero");
        return;
    }

    // Llamamos a la función definida en pokeapi.js
    let pokemon = await obtenerDatosApi(nombreBuscado);

    if (pokemon) {
        // Extraemos los datos que queremos mostrar
        let numero = pokemon.id;
        let nombre = pokemon.name;
        let imagen = pokemon.sprites.front_default;
        let tipo = pokemon.types[0].type.name;
        let peso = pokemon.weight / 10; // Convertido a kg
        let altura = pokemon.height / 10; // Convertido a metros
        let habilidad = pokemon.abilities[0].ability.name;

        // Armamos la tarjeta completa estilo Pokédex
        divContenedor.innerHTML = `
            <div class="tarjeta-pokedex">
                <span class="numero">#${numero}</span>
                <h2 class="nombre">${nombre}</h2>
                
                <div class="pantalla-img">
                    <img src="${imagen}" alt="${nombre}">
                </div>
                
                <div class="info">
                    <p><strong>Tipo:</strong> <span class="badge">${tipo}</span></p>
                    <p><strong>Altura:</strong> ${altura} m</p>
                    <p><strong>Peso:</strong> ${peso} kg</p>
                    <p><strong>Habilidad:</strong> ${habilidad}</p>
                </div>
            </div>
        `;
    } else {
        divContenedor.innerHTML = `<p style="text-align: center;">No se encontró el Pokémon "${nombreBuscado}"</p>`;
    }
});