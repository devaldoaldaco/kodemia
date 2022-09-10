const state = {
    turno: 'jugador 1',
    jugadasRestantes: 10,
    ganador: undefined
};

const input = document.querySelector('input');

input.addEventListener('keypress', (event) => {
    const key = event.key;
    const value = input.value;
    console.log(`alguien presiono la tecla ${key}, y el valor del input se actualizo a: ${value}`);
});

const button = document.getElementById('00');

button.addEventListener('click', (event) => {
    const id = button.id;
    console.log(id);
})
// console.log(input.__proto__);

const button = new HTMLButtonElement('00');

// POLYMER

this.$.00.value 