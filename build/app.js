"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        console.log("🚀 ~ file: app.ts ~ line 14 ~ callRandomJoke ~ jokeResponse", jokeResponse);
        const HTMLResponse = document.querySelector('#joke');
        // Imprimimos respuesta especificando el atributo del joke (+info en console.log línea 14)
        HTMLResponse.innerHTML = jokeResponse.joke;
    });
}
