function Animal(tieneOjos, ojos, corazon, color) {
    this.tienesOjos = tieneOjos;
    this.ojos = ojos;
    this.corazon = corazon;
    this.color = color;
    this.comer = (tipoComida) => {
        console.log(`Este animal come esto: ${tipoComida}`);
    }
}

const serpiente = new Animal(true, 2, true, 'verde'); // instancia
console.log(serpiente.corazon);
serpiente.comer('ratones');

const gato = new Animal(true, 2, true, 'gris'); // instancia
console.log(gato.corazon);
gato.comer('wiskas');

class Animal {
    constructor(tieneOjos, ojos, corazon) {
        this.tienesOjos = tieneOjos;
        this.ojos = ojos;
        this.corazon = corazon;
    }

    comer(comida) {
        return `Este animal come esto: ${comida}`;
    }
}

class Oviparo extends Animal {
    constructor(tieneOjos, ojos, tieneCorazon, naceDeHuevo) {
        // super(tieneOjos, ojos, corazon)
        super(tieneOjos, ojos, tieneCorazon); // es obligatorio mandar llamar a la funcion super
        this.naceDeHuevo = naceDeHuevo;
    }
}

class Reptil extends Oviparo {
    constructor(tieneOjos, ojos, tieneCorazon, naceDeHuevo, seArrastra) {
        // super(tieneOjos, ojos, corazon)
        super(tieneOjos, ojos, tieneCorazon, naceDeHuevo); // es obligatorio mandar llamar a la funcion super
        this.seArrastra = seArrastra;
    }
}

const perro = new Animal(true, 2, true); // instancia
console.log(perro.corazon);
let texto = perro.comer('dogchow');
console.log(texto);

const ave = new Oviparo(true, 2, true, false);
console.log(ave);

const squirtle = new Oviparo(true, 2, true, false);
console.log(squirtle);

const otroAnimalRaro = new Oviparo(true, 1, true, false);
console.log(otroAnimalRaro);