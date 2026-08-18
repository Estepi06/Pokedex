
const PEXELS_API_KEY = "1JJfxFvqSnvPlRUwonmOGls5KxvX2ytKlcjIq2RTy3bIFPOkhWlVVpyv";

async function obtenerFotos() {
    let url = "https://api.pexels.com/v1/curated?per_page=12";

    try {
        let respuesta = await fetch(url, {
            headers: {
                "Authorization": PEXELS_API_KEY
            }
        });

        if (!respuesta.ok) {
            throw new Error("Error de autorización. ¿Seguro que pusiste tu API Key correcta?");
        }

        let datos = await respuesta.json();

        return datos.photos;
        
    } catch (error) {
        console.log("Al parecer huibo un error", error);
        return null;
    }
}
