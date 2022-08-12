//expresion
let discotec = function() {
    if(edad < 18) {
        return;
    } else {
        console.log('Que baile');
    }
}
//declarativa
function discoteca(edad) {
    if(edad < 18) {
        return;
    } else {
        console.log('Que baile');
    }
}

discoteca(15);
discoteca(18);

function esMayorQue(numero) {
    return numero > 5;
}

if(esMayorQue(10) === true) {
    console.log('es mayor que 5');
    return;
}

console.log('esto se deberia imprimir ?')

function multiplicar(numero1, numero2) {
    let resultado = numero1 * numero2;
    console.log(`${resultado}`);
    return resultado;
};

console.log(multiplicar(10, 5));

console.log(multiplicacion);

let arrowFunction = () => {
    console.log(multiplicar(10, 5));
};

let persona = {
    saludar: function() {
        console.log('HOLA');
    }
};
let funcion = 'saludar';
objeto[funcion]();