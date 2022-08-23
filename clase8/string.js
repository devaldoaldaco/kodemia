const string = 'HOLA';

console.log(string.charAt(0));

console.log(String.prototype);

const carro = {
    puertas: 3
};

carro.puertas = 5;

String.prototype.split = function() {
    let arreglo = [];
    for(let i = 0; i < this.length; i++) {
        let letraMayuscula = `${this.charAt(i)}` //A, B, C, D
        stringNuevo.push(letraMayuscula);
    }
    return arreglo;
}

let palabra = 'dev.aldo.aldaco@gmail.com';

let dominioDelCorreo = palabra.split('@')[1];
let nombreEmpresa = dominioDelCorreo.split('.')[0];

console.log(dominioDelCorreo);

person.toString = function() {
    console.log(this.nombre);
}
ƒ () {
    console.log(this.nombre);
}
person.toString()
VM1830:2 aldo
undefined
class Person {
    constructor(nombre) {
        this.nombre = nombre;
    }

    toString() {
        console.log(this.nombre);
    }
}
undefined
const aldo = new Person();
undefined
aldo.toString();
VM2129:7 undefined
undefined
const aldo = new Person('aldo');
undefined
aldo.toString();
VM2129:7 aldo
undefined
Object.prototype.toString = function() {
    console.log(this.nombre);
}
ƒ () {
    console.log(this.nombre);
}
person.toString()
VM1830:2 aldo
undefined
Object.prototype.toString = () => {
    console.log(this.nombre);
}
() => {
    console.log(this.nombre);
}
person.toString()
VM1830:2 aldo
undefined
Object.prototype.toString = () => {
    console.log(this.nombre);
}
() => {
    console.log(this.nombre);
}
Object.prototype.nombre
undefined
3VM2917:2 undefined
nombre
