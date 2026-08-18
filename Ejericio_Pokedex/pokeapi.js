async function obtenerDatosApi(nombre) {
    try {
        // Armamos la URL con el nombre que escriba el usuario
        let url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
        
        // Hacemos la petición
        let respuesta = await fetch(url);
        
        // Convertimos la respuesta a un objeto JSON
        let pokemon = await respuesta.json();
        
        // Devolvemos el resultado
        return pokemon;

    } catch (error) {
        console.log("Error al consultar la API:", error);
        return null;
    }
}