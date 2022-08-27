const numeros = [1,2,3,3,4,5,5];
indices         [0,1,2,3,4,5,6];

numeros.filter((item, indexFilter) => {

    // item = 1; index = 0; numeros.indexOf(1) = 0; indexFilter 0
    // item = 2; index = 1; numeros.indexOf(2) = 1; indexFilter 1
    // item = 3; index = 2; numeros.indexOf(3) = 2; indexFilter 2
    // item = 3; index = 3; numeros.indexOf(3) = 2; indexFilter 3


    if(numeros.indexOf(item) === index) {
        return true;
    } else {
        return false;
    }
});


const frutas = [{name: '🍐', color: 'verde'}, {name: '🍎', color: 'rojo'}, {name: '🍌', color: 'amarillo'}];

const callback = (acumulador, itemActual) => {
    acumulador += itemActual.name;
    return acumulador;
};

let vaso = frutas.reduce(callback, 'vaso de jugo con un poco de agua y');

console.log(vaso);

const koders = [{name: 'Fanny', calificacion: 10}, {name: 'Rodrigo', calificacion: 5}, {name: 'Fer', calificacion: 100}];
const numeros = [1,2,3,4,5,6,7]; // 

let suma = numeros.reduce((acumulador, numero) => {
    console.log(acumulador);// 1
    return acumulador += numero;
}, 0);

console.log(suma);
const promedio = koders.reduce((acumulador, itemActual) => {
    acumulador += Number(itemActual.calificacion) / koders.length; //
   
    return acumulador;
}, 0);

console.log(promedio);