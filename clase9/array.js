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
};

let arr = [10,17,20,30,40,50];
console.log(arr.filter(callback));


const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

const obj = {
    edad: 10,
    imprimirEdad: function() {
        console.log(edad);
    } 
};

// sujeto verbo predicado

function suma(variable1, variable2, variable3) {
    let resultado = variable1 + variable2 + variable3;
    console.log(resultado);
    return resultado;
}

for(let i = 0; i<10;i++) {

}

let resultado = suma(10, 10);

//declarativa
function carro(parametro) {

}
//expresion
let auto = function() {

}


Bmw => Carro => Object

Array.prototype.filter
Array.prototype.unshift
Array.prototype.shift
Array.prototype.push
Array.prototype.pop
Array.prototype.slice
Array.prototype.sort
Array.prototype.filter
Array.prototype.find
Array.prototype.map
Array.prototype.reduce
const users = [
    {name: 'aldo', age: 18}, // a
    {name: 'magaly', age: 30}, // b
    {name: 'alfonso', age: 20}, 
    {name: 'jesus', age: 50}, 
    {name: 'alberto', age: 10}
];

let callback = function(a, b) {
    if (a.age < b.age) {
        return 1;
    }
    if (a.age > b.age) {
        return -1;
    }
    return 0;
};

users.sort(callback);


const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

function ordenarAutos(autos) {
    let compare = function() {};
    autos.sort();
    return autos;
}

let autosOrdenados = ordenarAutos(autos);
console.log(autosOrdenados);

//[{marca: 'bmw', color: 'azul'}, {marca: 'bmw', color: 'azul'}, {marca: 'bmw', color: 'azul'}, {marca: 'bmw', color: 'blancos'}, {marca: 'bmw', color: 'negro'}]


Array.prototype.filter
Array.prototype.find


// frutas es un arreglo con 3 elementos de tipo string
const frutas = ['banana', 'manzana', 'fresa'];

function callback(itemActual) {
    return itemActual === 'banana';
}

let arregloResultante = frutas.filter(callback);

console.log(arregloResultante);

const users = [{username: 'aldo', password: 'pass*2022'}, {username: 'alfonso', password: 'pass*2023'}];

let usuarios2023 = users.filter((user) => {
    return user.password.includes('2023');
});

console.log(usuarios2023);


function callback(itemActual) {
    return itemActual === 'banana';
}

let arregloResultante = frutas.filter(callback);

console.log(arregloResultante);
// implementacion de filter(asi mas o menos funciona)
// function filter(array, callback) {
//     let arreglo = [];
//     // va recorriendo el arreglo
//     if(callback(array[0]) === true) {
//         arreglo.push(array[0]);
//     }


//     return arreglo;    
// }


const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];


function ordenarAutos(autos, callback){
    autos.sort();
    return autos
}

let autosOrdenados = ordenarAutos(autos, compare);

console.log(autosOrdenados);

function compare(a,b){
        if (a.color > b.color) {
          return 1;
        }
        if (a.color < b.color) {
          return -1;
        }
        return 0;
}


const frutas = ['banana', 'banana podrida', 'fresa podrida', 'manzana'];

const primerFrutaPodrida = frutas.find(function(fruta) {
    if(fruta.includes('podrida') === true) {
        return fruta;
    }
})

console.log(primerFrutaPodrida);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

Array.prototype.map


const array1 = [1, 4, 9, 16];

// pass a function to map
let duplicar = function(x) {
    return x * 2;
}
const map1 = array1.map(duplicar);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
Array.prototype.map = function(callback) {
    let nuevoArreglo = [];
    for(let i = 0; i < this.length; i++) {
        const valorTransformado = callback(this[i]);
        nuevoArreglo.push(valorTransformado);
    }
    return nuevoArreglo;
}

const pokemones = ['picachu', 'squirtle', 'volvasaur'];

const evolucionarPokemones = pokemon => {

    if(pokemon === 'picachu') {
        return 'raychu'
    } else if(pokemon === 'squirtle') {
        return 'warturtle'
    } else {
        return 'ibasaur'
    }
    // const evoluciones = {
    //     picachu: 'raychu',
    //     squirtle: 'warturtle',
    //     volvasaur: 'ibasaur'
    // };

    // return evoluciones[pokemon];
};

const pokemonesEvolucionados = pokemones.map(evolucionarPokemones);

console.log(pokemonesEvolucionados);

Array.prototype.reduce