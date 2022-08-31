// // const parrafos = document.getElementsByName('p');
// // parrafos[0].style.color = '#FF5733';

// const div = document.getElementById('div1');
// div.style.color = 'red';
// console.log(div);

// const segundoParrafo = document.querySelector('div > p.p2');
// console.log(segundoParrafo);

// const body = document.querySelector('body');

// const element = document.createElement('h1');
// element.style.backgroundColor = 'red';
// element.style.color = 'white';
// element.classList.add('title');
// element.classList.add('title-black');
// element.classList.add('title-xl');
// console.log(body.children);

// body.appendChild(element);

// function generarListaDesordenada() {
//   const textos = ['Tarea 1', 'Tarea 2', 'Tarea 3']
//   const body = document.querySelector('body');
//   const ul = document.createElement('ul');
//   const li1 = document.createElement('li');
//   const li2 = document.createElement('li');
//   const li3 = document.createElement('li');
  
//   li1.appendChild(document.createElement('span'));
//   li2.appendChild(document.createElement('span'));
//   li3.appendChild(document.createElement('span'));

//   ul.appendChild(li1)
//   ul.appendChild(li2)
//   ul.appendChild(li3)

//   body.appendChild(ul)
// }

// generarListaDesordenada();

// generarListaDesordenada();

// generarListaDesordenada();

const body = document.querySelector('body');

function generarTarjetaDeCredito(id, numeroTarjeta, titulo) {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const img = document.createElement('img');
  const p = document.createElement('p');
  div.id = id;
  h1.innerText = titulo;
  img.src = 'https://thumbs.dreamstime.com/b/credit-card-chip-isolated-credit-card-chip-isolated-white-background-d-render-110054752.jpg';
  img.alt = 'Chip de tarjeta';
  p.innerText = numeroTarjeta;
  p.className = 'texto-redondo';

  div.appendChild(h1);
  div.appendChild(img);
  div.appendChild(p);
  body.appendChild(div);
}

generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');
generarTarjetaDeCredito('bbva', '4561 1234 1234 1234', 'Clasica MC');

// generarTODOList() {
//   // generar li
//   // mandarLLamar
// }

// for(let) {
//   generarTodoItem(`texto${}`)// li
// }

// generarTodoItem(texto) {
//   return li;
// }

// let htmlString = `<h1>${titulo}</h1>`;
