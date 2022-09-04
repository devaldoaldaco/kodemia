# kodemia

This is a repo with examples of code to show some concepts about JS ...

<h1>CONTENIDO</h1>  

<h2>Variables</h2>

Definición: Ubicación en memoria que almacenara un valor(de cualquier tipo de dato)
```js
    let x = 5;
    let y = 6;
    let z = x + y;
```

<h2>Strings</h2>

Definición: Tipo de dato, una colección de caracteres

```js
    let string = ‘Esto es un string’
    let stringDinamico = `Esto también es un string`
```

<h2>Coercion de tipos</h2>

Definición: Conversion de un tipo de dato a otro

```js
// Implicita

    console.log( '10' * 3 ); // 30
    console.log( '10' / 2 ); // 5
    console.log( '1' + true ); // 1true
    console.log( '10' - true ); // 9
    console.log( true + true ) // 2
```

<h2>Funciones</h2>

Definición: es un bloque de código que realiza alguna operación
```js
// Declaración de una función

    function nombreDeMiFuncion() {
        //cuerpo de una funcion
        console.log(‘Hola mundo’)

        // retorno de la funcion(cualquier tipo de dato, funcion, objeto, arreglo)
        return	
    }
```

```js
// Expresión de una función

    const expresionFuncion = function () {
        //cuerpo de una funcion
        console.log(‘Hola mundo’)

        // retorno de la funcion(cualquier tipo de dato, funcion, objeto, arreglo)
        return	
    }
```

<h2>Funciones flecha</h2>

Definición: son una nueva forma de expresar funciones, además de las declaradas y las expresiones funcionales (al igual que estas, no se alzan).

```js
    const funcionFlecha = () => {
        return ‘algún valor’;
    }

    Return implícito y explícito

    const funcionFlecha = () => {
        return ‘return explicito’;
    }

    const funcionFlecha = () => ‘return implicito’;
```

<h2>Objetos</h2>

Definición: Un objeto es una colección de datos ordenados por llave: valor, dentro de llaves.

```js
// Generación de objetos

// Objeto literal
    let objeto = {
        llave: valor
    };
```

<h2>Prototipos</h2>

Definición: estructura básica de un objeto, métodos y atributos 

```js
    let carro = {
        llantas: 4,
        acelerar: function() {
            console.log(‘Estoy acelerando’);
        }
    };

    let bmw = {
        marca: ‘BMW’,
    };

    bmw.__proto__ = carro;
```

<h2>Métodos de distintos prototipos String, Number, Object, Array</h2>

Definicion: un metodo es una funcion que pertenece al prototipo de un objeto

```js
    String.prototype
    Number.prototype
    Object.prototype
    Array.prototype
```

<h2>this</h2>

```js
    (function() {

        this.b="otra cosa";
        this.a="una cosa"

        function MiClase() {
        this.a="hola";
        this.b="adios";
        }

        let obj= new MiClase();
        let getA=function () {
        return this.a;
        };

        obj.getA=getA;

        let getB=() => this.b;
        obj.getB=getB;

        console.log(getA());
        console.log(getB());

        console.log(obj.getA());
        console.log(obj.getB());

    })();
```

<h2>Parsear datos(transformando datos)</h2>

Definición: Limpiar objetos, quitando propiedades de el o generando propiedades a partir de otras

```js
    let usuario = {
      gender: "female",
      name: {
        title: "Ms",
        first: "Victoria",
        last: "Claire"
      },
      location: {
        street: {
          number: 7299,
          name: "Main St"
        },
        city: "South River",
        state: "Northwest Territories",
        country: "Canada",
        postcode: "E0S 1J0",
        coordinates: {
          latitude: "-70.5916",
          longitude: "104.4741"
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City"
        }
      },
      email: "victoria.claire@example.com",
      login: {
        uuid: "f3b3b9c7-2ae8-462f-bcee-a008b45775f5",
        username: "tinyostrich121",
        password: "tripod",
        sal": "Q4GAk8EW",
        md5: "e32f7c307c861f45d7a5f03fc77cf602",
        sha1: "eff07d115d774be840da5932770dc36f8f105d23",
        sha256: "af20dd3340c7adcf282bee6258f0b6d8de564b0e144d97d6f2c2831c3f82716e"
      },
      dob: {
        date: "1946-12-28T00:27:47.827Z",
        age: 75
      },
      registered: {
        date: "2013-07-20T03:48:19.434Z",
        age: 9
      },
      phone: "H34 M39-3871",
      cell: "D88 V76-4030",
      id: {
        name: "SIN",
        value: "141071597"
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg"
      },
      nat: "CA"
    };

    // Resultado de parsear el usuario

    let usuarioNuevo = {
      gender: "female",
      name: "Victoria Claire",
      picture: "https://randomuser.me/api/portraits/med/women/67.jpg",
      location: "Main St 7299, South River, Northwest Territories, E0S 1J0"
    };
```

<h2>Sugar syntax</h2>

Definición: Forma mas simple de escribir JS

```js  
// Esto

    function Carro(marca, puertas, llantas) {
        this.marca = marca;
        this.puertas = puertas;
        this.llantas = llantas;
    }

// Es lo mismo que

    class Carro {
        constructor(marca, puertas, llantas) {
            this.marca = marca;
            this.puertas = puertas;
            this.llantas = llantas;
        }
    }

``` 