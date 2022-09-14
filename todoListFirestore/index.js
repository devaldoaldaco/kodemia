// conection to firebase
import { saveTask } from './firebase.js';
import { Task } from './classes.js';


// Obetener los datos de mi interfaz
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const descripcion = document.querySelector('#description').value;

    const task = new Task(title, descripcion);
    saveTask(task);
});




