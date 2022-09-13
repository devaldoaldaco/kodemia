const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    //submit
    event.preventDefault(); // no lo escuches

    const email = document.querySelector('[type="email"]').value;
    const pass = document.querySelector('[type="password"]').value;

    //Simulacion de una peticiion
    if(email === 'aldo@kodemia.mx' && pass === 'admin') {
        const list = document.querySelector('#list');
        list.style.display = 'block';
        const login = document.querySelector('#login');
        login.style.display = 'none';

    } else {
        window.alert('Sus credenciales no son validas');
    }
});
