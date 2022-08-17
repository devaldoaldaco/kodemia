
// ES6 o ES2015
let carro = {
    puertas: 4,
    color: 'gris',
    electrico: false,
    acelerar: function() {
        console.log(this.color);
    }
};
let {puertas, color, electrico} = carro; //sugar syntax
console.log(puertas, color, electrico);

// funcion constructora
function Carro(puertas, color, electrico = true, acelerar) {
    this.puertas;
    this.color;
    this.electrico;
    this.acelerar;
}

let miniCooper = new Carro(4,'azul',true, () => {console.log('No entiendo callbacks')});
console.log(miniCooper.acelerar());

// let string = new String();
// console.log(typeof string);

// let numero = 10;
// let otroNumero = numero.toString();

// console.log(typeof numero, typeof otroNumero);
