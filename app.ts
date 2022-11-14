interface Headers {
    accept?: string,
    urlHeader?: string,
    token?: string
}

interface Options {
    method?: string,
    headers: Headers
}

interface Api {
    url: string,
    options?: Options
}

// ---------------------- WEATHER ---------------------- 

const printWeather = ( { weather, main }: any ): void => {
    const imgWeather = <HTMLImageElement>document.getElementById('imgWeather');
    const txtWeather = <HTMLElement>document.getElementById('txtWeather');

    const icon: string = weather[0].icon;
    const temp: number = parseInt(main.temp);

    imgWeather.src = "./img/" + icon + ".png";
    txtWeather.innerText = temp + ' ºC';
}


const weatherUser = (async (): Promise<void> => {
    
    const locationURL = 'https://ipapi.co/json/'
    
    const { latitude, longitude } = await (await fetch(locationURL)).json()
    
    const weatherToken = 'd0047952dfbeb9ec30622425fe11ed84'
    const weatherURL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherToken}&units=metric`;

    const weatherDataUser = await (await fetch(weatherURL)).json()

    printWeather(weatherDataUser);
})()

// ---------------------- JOKES ---------------------- 

let joke: string

// Creamos función asincrona para esperar la promesa.
async function callRandomJoke(): Promise<void> {

    /* 
    showRandomJoke = Math.floor(Math.random());
    if (showRandomJoke === 1) {

        //algo como la línea 64?


    }
 */


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
    console.log("🚀 ~ file: app.ts ~ line 87 ~ callRandomJoke ~ jokeResponse", jokeResponse)

    const HTMLResponse = <HTMLElement>document.querySelector('#joke')

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
    ) { }
}

const reportJokes: IJoke[] = []

const btnScore: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btnScore')

btnScore.forEach(button => {
    button.addEventListener('click', () => {
        const data = button.getAttribute('data-score')
        console.log("🚀 ~ file: app.ts ~ line 120 ~ btnScore.addEventListener ~ data", data)

        reportJokes.push(new Joke(joke, Number(data)))
        console.log("🚀 ~ file: app.ts ~ line 123 ~ button.addEventListener ~ reportJokes", reportJokes)
    });
});