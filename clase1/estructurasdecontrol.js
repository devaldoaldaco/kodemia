// ejecutar el login
let loggeado = true;
let tarjetadecredito = false;

if(loggeado && tarjetadecredito) {
    console.log('Puede revisar su detalle de la tarjeta');
} else if(loggeado === false && tarjetadecredito) {
    console.log('El usuario no esta loggeado o no tiene tarjeta de credito');
} else {

}

if(loggeado) {
    if(tarjetadecredito) {
        console.log('Puede revisar su detalle de la tarjeta');
    }
}
let paso = 0;
switch(paso) {
    case 1: 
        console.log('Datos personales');
        break;
    case 2: 
        console.log('Datos academicos');
        break;
    default: // else
        console.log('Aun no hay datos que llenar');    
}

