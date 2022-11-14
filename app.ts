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

// ---------------------- WEATHER ---------------------- 

const weather = (async (): Promise<void> => {

    const locationURL = 'https://ipapi.co/json/'
    fetch(locationURL)
        .then((response) => response.json())
        .then((location) => showPosition(location))
    // const location = await (await fetch(locationURL)).json()
    console.log("🚀 ~ file: app.ts ~ line 22 ~ weather ~ location", location)

    const API_token = 'd0047952dfbeb9ec30622425fe11ed84'
    // let lat = navigator.geolocation.latitude;
    let lon: number;
    let lat: number;
    
    function showPosition(position) {
        
        lat = position.latitude
        lon = position.longitude
        
        const API_URL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_token}&units=metric`;
        
        tiempo(API_URL);
    }

})()

function tiempo(String): void {

    fetch(String)
        .then((response) => response.json())
        .then((data) => infoWeather(data));


    function infoWeather(data): void {

        let icon: string = data.weather[0].icon;
        let temp: number = data.main.temp.toFixed(0);

        let imgWeather = <HTMLImageElement>document.getElementById('imgWeather');
        if (imgWeather) {
            imgWeather.src = "./img/" + icon + ".png";
        }

        let temp2: HTMLElement = document.getElementById('txtWeather');
        if (temp2) {
            temp2.innerText = temp.toString() + ' ºC';
        }

    }
}

// ---------------------- JOKES ---------------------- 

let joke: string

// Creamos función asincrona para esperar la promesa.
async function callRandomJoke(): Promise<void> {
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