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

interface Position {
    coords: Coords
}

interface Coords {
    longitude: number,
    latitude: number
}

interface Weather {
    weather: AWeather[],
    main: IMain
}
interface IMain {
    temp: string
}

interface AWeather {
    icon: string,
    description: string
}

// const backImg1: HTMLElement = document.querySelector("#backImg1")!;
// const backImg2: HTMLElement = document.querySelector("#backImg2")!;
// const backImg3: HTMLElement = document.querySelector("#backImg3")!;

// changeBackground();

// ---------------------- WEATHER ---------------------- 

const printWeather = ( { weather, main }: Weather ): void => {
    
    const emojis = document.getElementById('ratingBtns');
    if(emojis)
    emojis.style.display="none";

    const imgWeather = <HTMLImageElement>document.getElementById('imgWeather');
    const txtWeather = <HTMLElement>document.getElementById('txtWeather');
    const txtDescription = <HTMLElement>document.getElementById('txtDescription');

    const icon: string = weather[0].icon;
    const description: string = weather[0].description;
    const temp: number = parseInt(main.temp);

    imgWeather.src = "./img/" + icon + ".png";
    txtWeather.innerText = temp + ' ºC';
    txtDescription.innerText = description;
}

window.onload = () => navigator.geolocation.getCurrentPosition(weatherUser);

const weatherUser = async (position:Position): Promise<void> => {
    
    const { coords } = position;
    const {latitude, longitude } = coords;

    // const locationURL = 'https://ipapi.co/json/'
    // const { latitude, longitude } = await (await fetch(locationURL)).json()
    
    const weatherToken = '38c997fb804db3f0306de47499e851a1'
    const weatherURL: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherToken}&units=metric`;

    const weatherDataUser = await (await fetch(weatherURL)).json()

    printWeather(weatherDataUser);
}

// ---------------------- JOKES ---------------------- 

let joke: string

// Creamos función asincrona para esperar la promesa.
async function callRandomJoke(): Promise<string> {
    changeBackground()
    btnScore.forEach(btn => btn.removeAttribute('disabled'))
    

    const HTMLResponse = <HTMLElement>document.querySelector('#joke')
    
    // Almacenamos la URL de la API.
    const ApiJoke1: string = 'https://icanhazdadjoke.com/';
    
    // Añadimos el HEADER que especifica la API en su documentación.
    const optionsJoke1 = {
        headers: {
            'Accept': 'application/json'
        }
    };
    // Almacenamos la URL de la nueva API.
    const ApiJoke2: string = 'https://api.chucknorris.io/jokes/random';
    
    // Añadimos el HEADER que especifica la API en su documentación.
    const optionsJoke2 = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const randomNumber = Math.round(Math.random());

    console.log("🚀 ~ file: app.ts ~ line 108 ~ callRandomJoke ~ randomNumber", randomNumber)

    const emojis = document.getElementById('ratingBtns');
    
    if (randomNumber === 1 && emojis) {
        
        emojis.style.display = "inherit";
        joke = (await (await fetch(ApiJoke1, optionsJoke1)).json()).joke
        return HTMLResponse.innerHTML = joke
        
    }

    // Hacemos la petición/fetch a la API y lo convertimos a JSON.
    if (emojis){
        emojis.style.display = "inherit";
    }
    joke = (await (await fetch(ApiJoke2, optionsJoke2)).json()).value
    return HTMLResponse.innerHTML = joke
    

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
        
        btnScore.forEach(btn => btn.setAttribute('disabled', ''))
        const data = button.getAttribute('data-score')
        
        reportJokes.push(new Joke(joke, Number(data)))

        console.log('🚀 ~ file: app.ts ~ line 154 ~ button.addEventListener ~ reportJokes', reportJokes)
        
    });
});

// ---------------------- CHANGE IMG BG ---------------------- 

const bgImg: NodeListOf<HTMLOrSVGImageElement> = document.querySelectorAll('.bgImg')

function changeBackground(): void {
    
    bgImg.forEach((img: HTMLOrSVGImageElement) => {
        
        const randomNumber = Math.round(Math.random() * 10)
        const srcRoute = `../img/blobs/blob_${randomNumber}.svg`
        img.style.backgroundImage = `url(${srcRoute})`

    });
};