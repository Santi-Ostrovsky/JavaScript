console.log('\nINHERITANCE \n');

// OBJECT INHERITANCE

/* 'Object.create' recibe un objeto como parámetro y crea un
nuevo objeto cuyo prototipo es el primero que pasamos, por lo
que vamos a poder acceder a todas las propiedades y métodos
del objeto base en los nuevos objetos creados (simil Python). */

var person = {
    nombre: 'x',
    apellido: 'y'
} // Creado un objeto cualquiera

var Santi = Object.create(person); // Creado un objeto heredado.
console.log(Santi);
console.log(Santi.__proto__);

/* Object es el prototipo alfa, y tiene un método 'create' para
crear objetos nuevos.    */

// --------------------------------------------------------------


// CLASS INHERITANCE

/* En Class inheritance o herencia de clase, podemos hacer algo
exactamente igual al lenguaje Python, en el que una clase, al
crearse, hereda todas las propiedades y métodos de otra clase,
para poder ser utilizados en sus objetos:    */

class Student {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar () {
        console.log('Hola,', this.nombre);
    }
} // DEFINIDA UNA CLASE 'STUDENT' CON NOMBRE Y APELLIDO

class FailedStudent extends Student {
    constructor (nombre, apellido, promedio) {
        super (nombre, apellido);
        this.promedio = promedio;
    }
} // DEFINIDA CLASE HEREDADA 'FAILED.STUDENT' CON LAS PROP DE STUD.

var student1 = new FailedStudent ('Alex', 'Contrera', 12);

console.log('');
console.log(student1);
student1.saludar(); // LLAMO A LA FUNCIÓN MADRE SIN HABERLA
                    // DEFINIDO EN LA CLASE HEREDADA.


// CONDUCTORES ANIDADOS - [prototype].call(props)

/* Otra forma de heredar propiedades de una clase madre, es usar
la palabra-clave 'call', como definición de un nuevo parámetro
o propiedad de la clase hija:    */

function Persona (nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
}

Persona.prototype.saludar = function() {
    console.log('Hola, mi nombre es ' + this.nombre, this.apellido);
}

var Lucas = new Persona ('Lucas', 'Petra', '40.564.336');

console.log('');

console.log(Lucas);
Lucas.saludar();

// HASTA ACA SE CREO UNA CLASE, CON UNA FUNCION PROTO DE LA CLASE.

// AHORA, CREAR UNA NUEVA CLASE QUE HEREDE LAS PROPIEDADES DE PERSONA

function Alumno (nombre, apellido, dni, promedio) {
    Persona.call (this, nombre, apellido, dni);
    this.promedio = promedio;
}

/* [clase].call(this (como self en python), props) + mas las
propiedades propias de la nueva clase.    */

var Erica = new Alumno ('Erica', 'Loom', '16.555.223', 8.5);

// CON ESTE METODO, EL OBJETO ERICA NO TIENE ACCESO AL METODO SALUDAR

console.log('');
console.log(Erica);

// PARA PODER USAR EL METODO PADRE TENEMOS QUE CREAR EL NUEVO OBJETO
// A TRAVES DE OBJECT.CREATE:
Alumno.prototype = Object.create(Persona.prototype);
// ACA IGUALAMOS EL PROTOTYPE DE LA CLASE HIJA AL PROTOTYPE DE LA CLASE
// MADRE, Pero pisamos el constructor de la clase, asi que volvemos a
// crearlo:
Alumno.prototype.constructor = Alumno
// Una vez creado el constructor y igualado el prototype a la clase
// madre, creamos un objeto nuevo:

var Franco = new Alumno ('Franco', 'Lopez', '20.444.556', 9);

console.log('');
console.log(Franco);
Franco.saludar(); // Ahora el objeto Franco dentro de Alumnos SI tiene
                  // acceso al método 'saludar'.

