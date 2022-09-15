// conection to firebase
import { saveTask, getTasks, deleteTask } from './connection/firebase.js';
import { Task } from './classes/Task.js';
import { generateTask } from './utils/utils.js';


// Obetener los datos de mi interfaz
const button = document.querySelector('#createTaskButton');
const saveTaskButton = document.querySelector('#saveTaskButton');
const modal = document.querySelector('#createTaskForm');
const taskList = document.querySelector('#list');

button.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display =  'block';
});

saveTaskButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const descripcion = document.querySelector('#description').value;

    console.log(title, descripcion);

    const task = new Task(title, descripcion);
    saveTask(task);
    modal.style.display = 'none';
});


getTasks((tasks) => {
    taskList.innerHTML = '';
    tasks.forEach(doc => {
        const task = doc.data();
        generateTask(task, doc);
    });

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', ({target: {id}}) => { // destructuracion de datos

            //const id = event.getAttribute('id') no sabemos si funciona, pruebenlo
            deleteTask(id);
        });
    })
});



