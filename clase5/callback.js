let calculadora = (num1, num2, callback) => callback(num1, num2);


// expresion
let suma = (num1, num2) => num1+num2;

console.log(calculadora(10, 10, (num1, num2) => num1+num2));

// Crea una función que reciba 3 funciones diferentes y las ejecute en orden

let padre = (hijo1, hijo2, hijo3) => {
    hijo2();
    hijo1();
    hijo3();
};

let fun1 = () => {
    console.log('funcion hijo 1');
};

let fun2 = () => {
    console.log('funcion hijo 2');
};

let fun3 = () => {
    console.log('funcion hijo 3');
};

padre(fun1, fun2, fun3);

let hacerEnsalada = (contenedor, verduras, cuchillo, lavarVerduras, cortarVerduras, mezclarVerduras) => {
    // 1.- contenedor
    // 2.- verduras
    // 3.- cuchillo
    // lavar verduras
    // cortarlas
    // mezclarlas


    // Que debo hacer
    let verdurasLimpias = lavarVerduras(verduras);
    let verdurasCortadas = cortarVerduras(cuchillo, verdurasLimpias);
    let ensalada = mezclarVerduras(contenedor, verdurasCortadas);

    return ensalada;
};

let verduras = ['zanahoria', 'pimiento', 'calabaza'];

let lavar = (algo) => {
    console.log(`Lavando ... ${algo}`);// como se lavan las verduras
    return 'verduras limpias';
};

console.log(typeof lavar);
let carro1 = {};
let carro2 = new Object();

let cortarVerduras = (cuchillo, algo) => {
    console.log(`cortando con el ${cuchillo} ... ${algo}`);// como se cortan las verduras
    return 'verduras en rodajas';
};

let mezclarVerduras = (contenedor, algo) => {
    console.log(`mezclando dentro del ${contenedor} ... ${algo}`);// como se mezclan las verduras
};

hacerEnsalada('tupperware', verduras, 'chucky', lavar, cortarVerduras, mezclarVerduras);