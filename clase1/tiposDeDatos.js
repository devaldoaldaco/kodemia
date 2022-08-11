let miEdad = 30;
let miNombre = 'Aldo';
let nombreCompleto = `<h1>Hola ${miNombre}</h1>`;
let esMayorDeEdad = true;
let esMenorDeEdad = false;
let noEstaDefinido = undefined;
let usuarioLoggeado = null;

let carro = {
    motor: true,
    color: 'negro',
    llantas: 4,
    puertas: 3,
    pasajeros: {
        aldo: {
            edad: 30,
            nombre: 'alberto'
        }
    }
};

let miniCooper = coche;

miniCooper.motor = 'Electrico';

console.log(carro.motor);
console.log(miniCooper.motor);

let canastaFruta = ['manzanas', 'durazno', 'uvas'];
console.log(canastaFruta[0]);



