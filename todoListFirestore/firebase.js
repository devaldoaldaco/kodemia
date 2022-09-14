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

// Funcion que me ayudara a guardar 
export const saveTask = (titulo, descripcion) => {
    const objetoAGuardar = {
        title: titulo,
        description: descripcion
    };
    const canasta = collection(db, "tasks");
    addDoc(canasta, objetoAGuardar);
};