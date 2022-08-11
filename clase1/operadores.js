// operador asignacion
let variable = 'valor';

//operadores aritmeticos

let var1  = '1';
let var2  = 1;

console.log(var1 + var2);

let numero1 = 10;
let numero2 = 2;

console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);

// exponenciacion
console.log(numero1 ** numero2);
// modulo o residuo o resto
console.log(numero1 % numero2);
// incremental
let plus = numero1++; // cae deposito y no me interesa que se actualice el valor
let plus2 = ++numero1; // cae deposito y se actualiza el valor
plus2 = numero1 + 1;// 11


// decremental
numero1 = 5;
let resta = numero1--; // cae deposito y no me interesa que se actualice el valor
resta = numero1;
numero1 = numero1 - 1;
// numero1 = 4
console.log(numero1--);
numero1 = numero1;
console.log(numero1)
numero1 = numero1 - 1;

console.log(numero1);
let resta2 = --numero1; // cae deposito y se actualiza el valor
console.log(resta2);


// operadores logicos

let logueado = false;
let tieneTDC = true;

// operand and &&
/**
 * 
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 * 
*/
console.log(logueado && tieneTDC && otraVariable);

// operador OR 
/**
 * 
 * true && true = true
 * true && false = true
 * false && true = true
 * false && false = false
 * 
*/
console.log(logueado || tieneTDC || otraVariable);
// operador NOT !
/**
 * 
 * !true = false
 * !false = true
*/
console.log(!logueado) // true


//  >=
console.log(10 >= 5);// true
console.log(10 >= 10);// true
console.log(10 >= 11);//false

// <=
console.log((10 <= 5 && 5>3) || estoEsVerdadero);// false
console.log(10 <= 10);// true
console.log(10 <= 11);// true

// > <
console.log(10 > 11);// false
console.log(10 < 11);// true

// ==
let carro1 = '1'; // #ABC
let carro2 = 1; // #CBA
console.log(carro1 == carro2); // type cohersion

// ===
console.log(carro1 === carro2); // type cohersion