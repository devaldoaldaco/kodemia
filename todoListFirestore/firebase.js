import { getFirestore, addDoc, deleteDoc, updateDoc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2UsSnM51bO069qE_inuHpLTtpF50qLy4",
    authDomain: "fir-crud-5c218.firebaseapp.com",
    projectId: "fir-crud-5c218",
    storageBucket: "fir-crud-5c218.appspot.com",
    messagingSenderId: "449236511331",
    appId: "1:449236511331:web:dac3b10e03870b51196656"
};

const app = initializeApp(firebaseConfig);

// conection to firebase

// conection to firestore

const db = getFirestore();

/**
 * Funcion que me ayudara a guardar objetos de tipo task dentro de la canasta tasks
 * @param titulo {string}
 * @param descripcion {string}
 * */
export const saveTask = (task) => {
    const objetoAGuardar = {
        title: task.title,
        description: task.description
    };
    const canasta = collection(db, "tasks");
    addDoc(canasta, objetoAGuardar);
};