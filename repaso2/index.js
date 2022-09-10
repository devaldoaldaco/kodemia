const PI = 3.1416;

// Declaracion de una variable
let nombre;
// Inicializacion
nombre = 'aldo';

let numero = 10;

let esHombre = true;

let usuario = undefined;

let auto = null;

let tipoDato = typeof nombre;

console.log(tipoDato);

let fruta = {
    color: 'roja',
    sabor: 'acida',
    precio: 97,
    hermana: {
        color: 'amarilla',
        sabor: 'dulce',
        precio: 110,
        hermana: {
            color: 'azul',
            sabor: 'agridulce',
            precio: 120,
            hermana: {
                color: 'verde',
                sabor: 'dulce',
                precio: 10,
                hermana: {
                    color: 'rosa',
                    sabor: 'dulce',
                    precio: 80
                }
            }
        }
    }
};

console.log(fruta.hermana.hermana.hermana.hermana.precio);

let mesesDeCosecha = ['enero', 'febrero'];

mesesDeCosecha[0]; // enero
mesesDeCosecha[1]; // febrero

// operadores aritmeticos

let resultado = 10 + 10; // sumar valores numericos

console.log(resultado);

let concatenacion = 'Aldo' + ' Aldaco' //

console.log(concatenacion);

let prueba = 5 + '5'; // conversion implicita
let prueba2 = 5 + Number('5'); // conversion explicita

console.log(prueba, prueba2);

let resta = 5 - 5; 
let resta2 = 5 - '5'; 
let resta3 = '5' - '5'; 

let multiplicacion = 10 * 2;

let division = '10' / 2;

let potencia = 5 ** 2;

console.log(potencia, multiplicacion, division);

console.log(resta, resta2, resta3);

// operadores logicos &&, ||, >=, <=, ==, ===


// estructuras de control
let esHumano = true;
if(esHumano === true) {
    console.log('Aldo es humano');
}

let jonathan = 33;

if(jonathan >= 18 && jonathan < 30) {
    console.log('Es mayor edad');
    if(valor) { // no pasa por que esa validacion la puedes poner en el primer if
        if(valor) {
            console.log('Este mensaje esta anidado en el tercer if');
        }
    }
} else if(jonathan >= 30) {
    console.log('Es adulto mayor');
} else if(jonathan >= 30) {
    console.log('Es adulto mayor');
} else if(jonathan >= 30) {
    console.log('Es adulto mayor');
} else if(jonathan >= 30) {
    console.log('Es adulto mayor');
} else {
    console.log('Es menor de edad');
}

// switch(true) {
//     case (jonathan >= 18 && jonathan < 30):
//         console.log('Es mayor edad');
//         break;
//     case (jonathan >= 30):
//         console.log('Es adulto mayor');
//         break;
//     default: 
//         console.log('Es menor de edad');
// }

// let string = 'adios';

// switch(string) {
//     case 'adios':
//         console.log('Es la despedida');
//         break;
//     case 'hola':
//         console.log('Hola mundo');
//         break;
//     default: 
//         console.log('Cualquier otro caso');
// }

let annie = 19;

// while(annie > 18 && annie < 30) {
//     console.log('Jonathan es mayor de edad', annie);
//     annie++; 
// }

for(let annie = 18;annie <= 30; annie++) {
    console.log('Annie es mayor de edad', annie);
}

for(let elemento of array) {
    console.log()
}