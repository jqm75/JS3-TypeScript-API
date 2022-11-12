// Creamos función asincrona para esperar la promesa.
async function callRandomJoke() {
    // Almacenamos la URL de la API.
    const API_URL = 'https://icanhazdadjoke.com/';

    // Añadimos el HEADER que especifica la API en su documentación.
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    };
// Hacemos la petición/fetch a la API y lo convertimos a JSON.
    const jokeResponse = await (await fetch(API_URL, options)).json()
    console.log("🚀 ~ file: app.ts ~ line 14 ~ callRandomJoke ~ jokeResponse", jokeResponse)
        
    const HTMLResponse = document.querySelector('#joke')

    // Imprimimos respuesta especificando el atributo del joke (+info en console.log línea 14)
    HTMLResponse.innerHTML = jokeResponse.joke;
}