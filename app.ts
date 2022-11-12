/* interface Headers {
    urlHeader?: string,
    token?: string
}

interface Options {
    method?: string,
    headers: Headers
}

interface Api {
    url: string,
    options: Options
} */
let joke: string

// Creamos función asincrona para esperar la promesa.
async function callRandomJoke():Promise<void> {
    // Almacenamos la URL de la API.
    const API_URL: string = 'https://icanhazdadjoke.com/';

    // Añadimos el HEADER que especifica la API en su documentación.
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    };
// Hacemos la petición/fetch a la API y lo convertimos a JSON.
    const jokeResponse = await (await fetch(API_URL, options)).json()
    console.log("🚀 ~ file: app.ts ~ line 15 ~ callRandomJoke ~ jokeResponse", jokeResponse)
        
    const HTMLResponse: HTMLElement = document.querySelector('#joke') 

    // Imprimimos respuesta especificando el atributo del joke (+info en console.log línea 15)
    HTMLResponse.innerHTML = jokeResponse.joke;
    joke = jokeResponse.joke;
}

interface IJoke {

    joke: string,
    score: number,
    date: string

}

class Joke implements IJoke {

    constructor(
        public joke: string,
        public score: number,
        public date = new Date().toISOString()
        ) {}
}

const reportJokes: IJoke[] = []

const btnScore: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btnScore')

btnScore.forEach(button => {
    button.addEventListener('click', () => {
        const data = button.getAttribute('data-score')
        console.log("🚀 ~ file: app.ts ~ line 61 ~ btnScore.addEventListener ~ data", data)

        reportJokes.push(new Joke(joke, Number(data)))
        console.log("🚀 ~ file: app.ts ~ line 66 ~ button.addEventListener ~ reportJokes", reportJokes)
    });

});