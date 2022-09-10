export function dominioValido(string) {
    if(string.match('google')) return true;
    return false;
}

export function validarEmail(string) {
    let esValido = dominioValido(string.split('@')[1]);

    console.log(esValido === true ? 'El dominio es valido' : 'El dominio no es valido');
}

export function validarEdad(edad) {
    if(edad > 18) {
        return true;
    } else {
        return false;
    }
    //return edad > 18 ? true : false;
}