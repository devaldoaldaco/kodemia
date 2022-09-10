import defaul, {sumarNumeros, restarNumeros} from "./modulo.js";
import {dominioValido} from './validaciones.js';

import Carro from './Carro.js';

const bmw = new Carro(4, 4, 'bmw');
const audi = new Carro(4, 4, 'audi');
const versa = new Carro(4, 4, 'nissan');

//let concatenacion = defaul('aldo', 'js');
console.log(bmw, audi, versa);

let resultado = sumarNumeros(10, 10);
console.log(resultado);


