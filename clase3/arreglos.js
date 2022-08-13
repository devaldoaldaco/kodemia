let frutas = []; // inicializar el arreglo con un arreglo vacio
let indice = 0;

frutas[0] = 'fruta1';
frutas[0] = 'frutassss';
frutas[1] = 'fruta2'
frutas[2] = 'fruta3';

frutas[4] = true;
frutas[5] = false;

console.log(frutas);

function comprarFrutas(nombreFruta) {
    frutas[indice] = nombreFruta;
    indice++;
}

let nombre = 'aldo';
true && true
console.log(nombre.length);
// pregunta de entrevista tecnica JR
let frutas = [1,2,3];
console.log(frutas[frutas.length]);//undefined

console.log(frutas[frutas.length - 1]);

comprarFrutas('manzana');
comprarFrutas('fresa');
comprarFrutas('platano');
comprarFrutas('cereza');

console.log(frutas);

const arreglo = [1,2,3];
arreglo[0] = 'String';

const verduras = new Array(2);

console.log(verduras);