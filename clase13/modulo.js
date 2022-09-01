let nombre;
export function saludar() {
    console.log('hola mundo');
}

export let PI = Math.PI;
export const BETA = Math.PI * 2;

nombre = 'aldo';
console.log(nombre);

export function sumar(num1, num2) {
    return num1 + num2;
}

let arrowFuncion = () => {

};

export default arrowFuncion;

export class Cuadrado {
    constructor(longLado) {
        this.longLado = longLado
    }

    calcularArea() {
        return this.longLado * this.longLado;
    }
}


