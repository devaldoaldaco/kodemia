// for in
const libro = {
    titulo: 'Harry potter y el misterio de JS',
    autor: 'Victor',
    paginas: 300
};

for(let nombrePropiedad in libro) {
    // libro['titulo'] 'harry'
    // libro['autor'] 'victor'
    // libro['paginas'] 300
    console.log(nombrePropiedad, libro[nombrePropiedad]);
}

// for of

let frutas = ['fresa', 'mango', 'melon'];

frutas[0] //fresa
frutas[1] //mango
frutas[2] //melon

for(let fruta of frutas) {
    console.log(fruta);
}


let obj = {
    frutas: ['fresa', 'mango', 'melon'],
    personajes: ['harry', 'sina', 'benja']
}

// for(let propiedad in obj) {
//     // propiedad frutas  obj['frutas'] = ['freas']
//     // propiedad persobnajes  obj['personajes'] = ['harry']
    
    
//     for(let elemento of obj[propiedad]) {
//         console.log(elemento);
//     }
    
// }


for(let fruta of obj['frutas']) {
    console.log(fruta);
}


for(let fruta of obj['personajes']) {
    console.log(fruta);
}


function imprimirNombre(nombre) {
    console.log('Mi nombre es ' + nombre);
}

// el negocio de cinthia

let fecha = '06/09/2022';

function hacerGelatina(sabor, forma) {
    let gelatina = `Esta es la gelatina de sabor ${sabor} y con forma ${forma} fue hecha ${fecha}`;
    return gelatina;
}

let gtelatinadeIsra = hacerGelatina('jerez','gato')

let gelatinaDeVicto = hacerGelatina('fresa',  'redonda')

console.log(gtelatinadeIsra);


// que es lo que hara
// que necesito
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let suma = sumar(10, 10);

console.log(suma);

let sumar = (numero1, numero2) => numero1 + numero2;
let suma = sumar(10, 10);
console.log(suma);

let sumar = (numero1, numero2) => {
    const PI = 3.1416;
    let resultado = numero1 + numero2 + PI;
    return resultado;
};

let resultado = sumar(25, 30);
console.log(resultado);

const generarObjetoLiteral = () => {
    let persona = {
        nombre: {
            nombre: 'Aldo',
            apellidoPaterno: 'Aldaco',
            apellidoMaterno: 'Contreras'
        },
        edad: 30,
        genero: 'Masculino',
        direccion: 'Mar del norte'
    };

    return persona;
};

let resultado = generarObjetoLiteral();
console.log(resultado);

let carro = {
    puertas: 4,
    color: 'gris',
    marca: 'seat',
    llantas: 4
};

carro['duenio'] = 'Aldo';

if(carro['duenio'] !== undefined) {
    console.log('La propiedad si existe');
} else {
    console.log('La propiedad no existe');
}

console.log(carro['puertas']);

for(let caracteristica in carro) {
    console.log(caracteristica);
}

	let koderList = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global


    let deleteKoder = (koderName) => {
        let newList = [];
        let j = 0;
        for(let i = 0; i < koderList.length; i++) {
            if(koderList[i] !== koderName) {
                newList[j] = koderList[i]; 
                j++;
            } 
        }
        koderList = newList;
    };

    deleteKoder('aldo');
    console.log(koderList);

    deleteKoder('Hector');
    console.log(koderList);

    deleteKoder('Xavy');
    console.log(koderList);