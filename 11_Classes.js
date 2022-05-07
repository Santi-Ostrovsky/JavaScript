console.log(' \nCLASSES \n')

/* Las clases son plantillas para la creación de objetos según
un modelo predefinido. Se utilizan para representar entidades
o conceptos, como los sustantivos en el lenguaje.    */

// HOW TO DEFINE CLASES - Use 'function constructors'.

function Persona(nombre, apellido, edad) {
    this.firstname = nombre;
    this.lastname = apellido;
    this.age = edad;
}

console.log('');
var juan = new Persona('Juan', 'Perez', 38);
console.log(juan);

/* Se crea una función (y el nombre va en mayúscula), y cada
propiedad va estar inicializada por la key-word 'this' tal como
'self' en Python.

Una vez hecho esto, la clase esta creada. Ahora, hay que crear los
objetos dentro de la clase. Para eso, creamos una variable de 
nombre x, y la asignamos como objeto de la Clase creada a traves
de la key-word 'new' + el nombre de la función constructora
(Clase), asignándole un valor a cada propiedad en forma de
argumentos (igual que en Python).

La función constructora no retorna nada porque la palabra 'new'
invoca la función constructora creando el objeto y 'bindea' a
traves de la palabra-clave 'bind' a cada parámetro del objeto
con una propiedad asignada en la clase.    

** 'bind' se va a ver más adelante.

Las Clases también pueden tener parámetros 'default' como los
switch statements, lo que hace que los objetos tengan valores
asignados de manera automática (a un valor predeterminado) si
los mismos no se pasan como parámetros al momento de definir
el objeto con la función 'new':    */

function Auto (marca, modelo, año) {
    this.marca = marca || 'BMW';
    this.modelo = modelo || 'X6';
    this.año = año || '2022';
}

/* En esta clase, si al definirse un objeto no se establece
alguno de los parámetros delimitados por la Clase, de
manera automática les serán asignados los valores descriptos
tras el operador por defecto '||' ('o' / 'or'):    */

console.log('');
 var golcito = new Auto ('Volkswagen', 'Gol');
 console.log(golcito);

// Automáticamente se le asignó el año 2022.
/* En caso de querer saltear un parámetro al crear el objeto,
para que tal parámetro sea un default, rellenar el espacio con
'null' (o undefined).    */

// También se puede usar el operador '&&' para otras operaciones
// lógicas.

// --------------------------------------------------------------

// ES6.

// OTRA FORMA de crear una clase es con la key-word 'constructor':

class Student {
    constructor (nombre, apellido) {
        this.nombre = nombre,
        this.apellido = apellido
    }
    saludar () {
        console.log('Hola,', this.nombre);
    }
}

console.log('');

var Santi = new Student('Santi', 'Ostrovsky');
Santi.saludar();
console.log(Santi);

/* Esta forma es más parecida a Python, aunque menos utilizada en
JS. (FORMA 'ES6').   */
