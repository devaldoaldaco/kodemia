
// ES6 o ES2015
let miniCooper = {
    puertas: 4,
    color: 'gris',
    electrico: false,
    acelerar: () => {
        console.log(this.color);
    }
};

console.log(miniCooper);

// funcion constructora
function Carro(puertas, color, electrico = true, acelerar) {// fabrica
    this.puertas = puertas;
    this.color = color;
    this.electrico = electrico;
    this.acelerar = acelerar;
}

let miniCooper = new Carro(4,'azul',true, () => {console.log('No entiendo callbacks')}); // el valor de esta expresion 'new Carro(4,'azul',true, () => {console.log('No entiendo callbacks')})'
console.log(miniCooper);

// let string = new String();
// console.log(typeof string);

// let numero = 10;
// let otroNumero = numero.toString();

// console.log(typeof numero, typeof otroNumero);
//IIFE - inmediatly invoked function expression
let miFuncion = function() {
    console.log('ALV');
};


let nombre = 'Aldo'; // asignacion 

//scope global piso 2
(function() {
    //scope local
    nombre = 'Juan';
    let apellido = 'Aldaco';
    const PI = 3.1416;
    console.log(nombre, PI); // Juan

    // piso 1
})();

// piso 2
let apellido = 'Aldaco';

console.log(nombre +' '+ PI); // Juan


