const cheff = {
    tipo: 'cocina basica',
    cocinar: function(platillo) {
        console.log(`Cocinando el ${platillo}`)
    }
};

const aldo =  {
    nombre: 'aldo',
    edad: 30,
    profesion: 'developer',
    programar: function() {
        console.log('Programando');
    }
};

// aldo.__proto__ = cheff;

Object.setPrototypeOf(aldo, cheff)

aldo.cocinar('filete');
cheff.programar();

const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
  
const me = Object.create(person); // enlazando los prototipos

//   let me = {};
//   me.__proto__ = person;

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

const aldo = {
    name: 'aldo'
};

aldo.__proto__ = person;
aldo.isHuman; //