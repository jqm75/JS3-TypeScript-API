async function callRandomJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const jokeResponse = await (await fetch(API_URL, options)).json()
    console.log("🚀 ~ file: app.ts ~ line 11 ~ callRandomJoke ~ joke", joke)
    
    const HTMLResponse = document.querySelector('#joke')

    HTMLResponse.innerHTML = jokeResponse.joke;
}