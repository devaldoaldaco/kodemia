let n = 3;

while(n === 3) {
    console.log(n, 'paso por el loop');
    n++;
}

// Generar una funcion que imprima cada valor dentro de un arreglo con while

let frutas = ['manzana', 'platano', 'fresa', 'melon'];// longitud = 4 
// ultima posicion es 3
let indice = 0;
// function imprimirFrutas(frutas) {
//     while(frutas[indice] !== undefined) {
//         console.log(frutas[indice]);
//         indice++;
//     }
// }

function imprimirFrutas(frutas) {
    for(let i = 0; i <= frutas.length - 1; i++) {
        console.log(frutas[i]);
    }
    // i = 4; false; 
}

imprimirFrutas(frutas); 

// for in 
let persona = {
    nombre: 'aldo',
    edad: 30,
    sexo: 'masculino'
};

let obj = {
    name: 'aldo'
};
let propiedad = 'name'
obj['name']

for(const propiedad in persona) {
    
    console.log(persona[llave]);
    //console.log(persona['nombre'])
    //console.log(persona['edad'])
}

// for of

let frutasPreferidas = ['manzana amarilla', 'platano', 'mango', 'sandia'];// longitud = 4 

for(const fruta of frutasPreferidas) {
    console.log(fruta);
}