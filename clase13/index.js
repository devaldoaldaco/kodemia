
import {PI} from './modulo.js';


function despedir(callback) {
    callback();
}

//despedir(saludame);

// function pintar() {
//     return saludame;
// }

//let funcion = saludame;

//sumar(10, 10);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', event => console.log(event)));


// button.addEventListener('click', () => {
//     console.log('me clickeaste', button);
//     alert('Clickearon al boton ');
// });

//1.- pasarla como argumento(callback) de otra function
//2.- ejecutarla
//3.- retornarla dentro de otra funcion
//4.- asignarla como valor de una variable


