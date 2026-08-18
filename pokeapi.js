async function obtenerDatosApi(nombre) {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
        //petición
        let respuesta = await fetch(url);
        let pokemon = await respuesta.json();
        return pokemon;

    } catch (error) {
        console.log("Error al consultar la API:", error);
        return null;
    }
}
