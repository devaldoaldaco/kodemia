// console.log(Array.prototype);

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];

// const newArray = array1.concat(array2);

// console.log(newArray);

// Array.prototype.concat = function(array) {
//     console.log('este es el chido');
//     return [...this, ...array];
// }

// const otherArray = array1.concat(array2);

// console.log(otherArray);

const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};


let schedules = ['09:00', '10:00', '11:00', '12:00'];

let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']

function parseFlight(vuelo) {
    let newArray = []; 
    for(const passenger of vuelo.passengers) {
        newArray.push(passenger.name);
    }
    return newArray;
}

function concatenarArreglos(array1, array2) {
    return array1.concat(array2);
}

function generarListaVuelos(uniqueArray) {
    let result = [];
    for(let i = 0; i < uniqueArray.length/2; i++) {
        let string = `${uniqueArray[i]} sale a las ${uniqueArray[i+4]}`
        result.push(string);
    }
    return result;
}

function imprimirListaDeVuelos() {
    let passengers = parseFlight(flight);
    let uniqueArray = concatenarArreglos(passengers, schedules);
    return generarListaVuelos(uniqueArray);
}

console.log(generarListaDeVuelos());

// 1.- Funcion que se encargue de parsear el objeto flight
// 2.- Funcion que concatene los elementos(arreglos)
// 3.- Que mande llamar las dos funciones anteriores 
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']

Array.prototype.pop = function() {
    const lastItem = this[this.length - 1];
    this[this.length - 1] = undefined;
    return lastItem;
}

Array.prototype.unshift = function() {
    let newArray = [];
    for(const argument in arguments) {
        newArray.push(arguments[`${argument}`]);
    }
    console.log('esta es mi definicion')

    return [...newArray, ...this];
}

let arreglo = [0,1];
console.log(arreglo.unshift(-2,-1));

const users = [{name: 'aldo', age: 18}, {name: 'magaly', age: 30},{name: 'alfonso', age: 20}, {name: 'jesus', age: 50}, {name: 'alberto', age: 10}];

const result = {
    0: 'aldo',
    1: 'magaly',
    2: 'alfonso',
    3: 'jesus',
    4: 'alberto'
};

// function filter(action) {
//     //for 
//     if(action(item) === true) {
//         arreglo.push(item);
//     }
// }

let callback = function(item) {
    return item > 18;
}
let arr = [10,17,20,30,40,50];
console.log(arr.filter(callback));