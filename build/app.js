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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const weather = (() => __awaiter(this, void 0, void 0, function* () {
    const locationURL = 'https://ipapi.co/json/';
    const location = yield (yield fetch(locationURL)).json();
    console.log("🚀 ~ file: app.ts ~ line 22 ~ weather ~ location", location);
    const API_token = 'd0047952dfbeb9ec30622425fe11ed84';
    // let lat = navigator.geolocation.latitude;
    let lon;
    let lat;
    function showPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    }
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log("🚀 ~ file: app.ts ~ line 20 ~ weather ~ lon", lon);
    // const API_URL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_token}`
}))();
// -----------------------------------------------------------------
let joke;
// Creamos función asincrona para esperar la promesa.
function callRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        // Almacenamos la URL de la API.
        const API_URL = 'https://icanhazdadjoke.com/';
        // Añadimos el HEADER que especifica la API en su documentación.
        const options = {
            headers: {
                'Accept': 'application/json'
            }
        };
        // Hacemos la petición/fetch a la API y lo convertimos a JSON.
        const jokeResponse = yield (yield fetch(API_URL, options)).json();
        console.log("🚀 ~ file: app.ts ~ line 15 ~ callRandomJoke ~ jokeResponse", jokeResponse);
        const HTMLResponse = document.querySelector('#joke');
        // Imprimimos respuesta especificando el atributo del joke (+info en console.log línea 15)
        HTMLResponse.innerHTML = jokeResponse.joke;
        joke = jokeResponse.joke;
    });
}
class Joke {
    constructor(joke, score, date = new Date().toISOString()) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}
const reportJokes = [];
const btnScore = document.querySelectorAll('.btnScore');
btnScore.forEach(button => {
    button.addEventListener('click', () => {
        const data = button.getAttribute('data-score');
        console.log("🚀 ~ file: app.ts ~ line 61 ~ btnScore.addEventListener ~ data", data);
        reportJokes.push(new Joke(joke, Number(data)));
        console.log("🚀 ~ file: app.ts ~ line 66 ~ button.addEventListener ~ reportJokes", reportJokes);
    });
});
