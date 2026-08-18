
// Seleccionamos los elementos del HTML usando querySelector
let divGaleria = document.querySelector("#gallery");
let inputBuscar = document.querySelector("#searchInput");

// Variable global para almacenar la lista de fotos que descargamos de la API
let fotosGuardadas = [];

// Función principal para iniciar la aplicación (se ejecuta al cargar la página)
async function iniciarApp() {
    // Llamamos a la función asíncrona obtenerFotos de api.js
    let fotos = await obtenerFotos();

    if (fotos) {
        fotosGuardadas = fotos;          // Guardamos las fotos en la lista global
        mostrarFotos(fotosGuardadas);    // Pintamos las fotos en la pantalla
    } else {
        // Mostramos una advertencia en pantalla indicando que es necesario colocar la API Key
        divGaleria.innerHTML = `
            <div class='error-text'>
                <p>Error al cargar las fotos de Pexels.</p>
            </div>
        `;
    }
}

// Función para pintar las tarjetas de fotos en el HTML
function mostrarFotos(listaFotos) {
    divGaleria.innerHTML = ""; // Limpiamos la galería antes de volver a dibujar

    // Si la lista de fotos filtrada está vacía, mostramos un mensaje
    if (listaFotos.length === 0) {
        divGaleria.innerHTML = "<p class='no-results-text'>No se encontraron fotos que coincidan con la búsqueda.</p>";
        return;
    }

    // Recorremos la lista de fotos usando un ciclo tradicional 'for'
    for (let i = 0; i < listaFotos.length; i++) {
        let foto = listaFotos[i];

        // En Pexels las URLs de las imágenes vienen dentro de "src" (usamos la de tamaño mediano "medium")
        let urlImagen = foto.src.medium;
        
        // Pexels incluye una descripción corta en el campo "alt"
        let tituloFoto = foto.alt || "Fotografía de Pexels";

        // Concatenamos el código HTML de la tarjeta al contenedor principal
        divGaleria.innerHTML += `
            <div class="gallery-card">
                <div class="card-image-container">
                    <img class="card-img" src="${urlImagen}" alt="${tituloFoto}">
                </div>
                <div class="card-info">
                    <div class="card-meta">
                        <span class="card-badge album-tag">ID: #${foto.id}</span>
                        <span class="card-badge photo-tag">Fotógrafo: ${foto.photographer}</span>
                    </div>
                    <h3 class="card-title">${tituloFoto}</h3>
                </div>
            </div>
        `;
    }
}


// Iniciamos la aplicación
iniciarApp();
