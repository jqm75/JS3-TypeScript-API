"use strict";
/* interface Headers {
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
// const backImg1: HTMLElement = document.querySelector("#backImg1")!;
// const backImg2: HTMLElement = document.querySelector("#backImg2")!;
// const backImg3: HTMLElement = document.querySelector("#backImg3")!;
// changeBackground();
// ---------------------- WEATHER ---------------------- 
const printWeather = ({ weather, main }) => {
    const imgWeather = document.getElementById('imgWeather');
    const txtWeather = document.getElementById('txtWeather');
    const icon = weather[0].icon;
    const temp = parseInt(main.temp);
    imgWeather.src = "./img/" + icon + ".png";
    txtWeather.innerText = temp + ' ºC';
};
window.onload = () => navigator.geolocation.getCurrentPosition(weatherUser);
const weatherUser = (position) => __awaiter(void 0, void 0, void 0, function* () {
    const { coords } = position;
    const { latitude, longitude } = coords;
    // const locationURL = 'https://ipapi.co/json/'
    // const { latitude, longitude } = await (await fetch(locationURL)).json()
    const weatherToken = '38c997fb804db3f0306de47499e851a1';
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherToken}&units=metric`;
    const weatherDataUser = yield (yield fetch(weatherURL)).json();
    printWeather(weatherDataUser);
});
// ---------------------- JOKES ---------------------- 
let joke;
// Creamos función asincrona para esperar la promesa.
function callRandomJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        changeBackground();
        btnScore.forEach(btn => btn.removeAttribute('disabled'));
        const HTMLResponse = document.querySelector('#joke');
        // Almacenamos la URL de la API.
        const ApiJoke1 = 'https://icanhazdadjoke.com/';
        // Añadimos el HEADER que especifica la API en su documentación.
        const optionsJoke1 = {
            headers: {
                'Accept': 'application/json'
            }
        };
        // Almacenamos la URL de la nueva API.
        const ApiJoke2 = 'https://api.chucknorris.io/jokes/random';
        // Añadimos el HEADER que especifica la API en su documentación.
        const optionsJoke2 = {
            headers: {
                'Accept': 'application/json'
            }
        };
        const showRandomJoke = Math.round(Math.random());
        console.log("🚀 ~ file: app.ts ~ line 102 ~ callRandomJoke ~ showRandomJoke", showRandomJoke);
        const className = `backImg blob${showRandomJoke}`; // <- para cambiar el fondo
        if (showRandomJoke === 1) {
            joke = (yield (yield fetch(ApiJoke1, optionsJoke1)).json()).joke;
            return HTMLResponse.innerHTML = joke;
        }
        // Hacemos la petición/fetch a la API y lo convertimos a JSON.
        joke = (yield (yield fetch(ApiJoke2, optionsJoke2)).json()).value;
        return HTMLResponse.innerHTML = joke;
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
        btnScore.forEach(btn => btn.setAttribute('disabled', ''));
        const data = button.getAttribute('data-score');
        reportJokes.push(new Joke(joke, Number(data)));
        console.log("🚀 ~ file: app.ts ~ line 139 ~ button.addEventListener ~ reportJokes", reportJokes);
    });
});
// ---------------------- CHANGE IMG BG ---------------------- 
/*
function changeBackground(): void {
    backImg1.className = showRandomJoke();
    backImg2.className = showRandomJoke();
    backImg3.className = showRandomJoke();
}; */
const backImg1 = document.getElementById('backImg1');
function changeBackground() {
    const randomNumber = Math.round(Math.random() * 10);
    const srcRoute = `../img/blobs/blob_${randomNumber}.svg`;
    backImg1.style.backgroundImage = `url(${srcRoute})`;
}
;
