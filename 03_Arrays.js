console.log(' \nARRAYS \n')

/* Like Python lists, are expressed between squared brackets '[]',
and elements inside separated by a comma ','.    */
var myArray = ['Josh', 25]
console.log(myArray)

/* They can also by nested or multi-dimensional, just as Python
lists. '[inner array][element]'   */

/* Can also be indexed to find individual elements inside, which
can be used to change said elements.    */

/* 'array.push()' function replaces Python's 'list.append()',
Allowing to add elements at the end of an Array.    */

// 'array.pop()' works the same as in Python.

// 'array.shift()' works the other way around. Pops the first item.

/* 'array.unshift()' is similar to push(), but adds an item at the
beginning og the Array.    */

// -----------------------------------------------------------------

console.log(' \n FOR-EACH()');
// COMO INVOCAR UNA FUNCIÓN EN TODOS LOS ELEMENTOS DE UN ARREGLO

var alumnos = ['toni', 'mati', 'leo', 'emma', 'tito'];

// PROGRAMACIÓN IMPERATIVA - se indica al programa qué hacer.
// para simplemente iterar sobre el array, usamos for loop:
for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

console.log('');

// PROGRAMACIÓN DECLARATIVA - se declaran funciones que operan solas.
// para correr una función que haga lo mismo sobre todos elementos:
alumnos.forEach(function(elemento) {
    console.log('keyword for each ' + elemento);
})

console.log('');

// incluso esto puede guardarse en una variable:
var presentarAlumnos = alumnos.forEach(function(elemento) {
    console.log('Hola, ' + elemento);
})

presentarAlumnos;

// -----------------------------------------------------------------

console.log(' \nARRAY.PROTOTYPE.MAP() \n');

/* El método 'map()' crea un nuevo array con los resultados de la
llamada a la función indicada aplicados a cada uno de sus elementos.

Es decir, que a diferencia de 'forEach()' (que no retorna nada), map
es una función que sí retorna algo: crea un nuevo arreglo con las
propiedades y/o modificaciones indicadas en las funciones posteriores:
*/
var numbers = [2, 4, 6, 8, 10];

var doubles = numbers.map(function(num){
     return num * 2;
})

console.log(numbers); // Se imprime el primer array, nums originales.
console.log(doubles); // Se imprime el segundo array, con nums*2.
 
 // MAP() ES UN TIPO DE CALLBACK -file 14_Callbacks-.
 // ASÍ SERÍA SIN CALLBACKS:

var nuevoArray = [];
for (var i = 0; i < numbers.length; i++) {
    nuevoArray.push(numbers[i] * 2);
}

console.log('');
console.log(numbers);
console.log(nuevoArray);

// -----------------------------------------------------------------

console.log(' \nARRAY.PROTOTYPE.REDUCE() \n');

/* El método reduce() ejecuta una función reductora sobra cada
elemento en un array, devolviendo cono resultado un único valor.*/

// SIN CALLBACK

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Si quiero sumar todos los valores del array tengo que usar un
for loop para iterar por cada elemento, y guardar la suma en otra
variable cada vez que corre el loop. */

var sumNums = 0;
for (i = 0; i < nums.length; i++) {
    sumNums += nums[i];
}

console.log(nums);
console.log(sumNums);

// CON CALLBACK - REDUCE()

var sumReduce = nums.reduce(function(acumulador, elemento) {
    return acumulador + elemento;
}, 0);

/* Esto lee: variable sumReduce, es igual al array reducido nums,
luego de aplicarle la función reduce, que toma como parámetro un
acumulador 'x' (variable temporal creada para efectuar la suma) y
cada item del array, devolviendo la suma del valor acumulado más
el valor de cada elemento del array (valor inicial + valor actual),
luego igualando el valor del acumulador, que en este caso (Y POR
DEFECTO) es cero (0), pero que puede ser cualquier otra cosa, como
un objeto vacío, otro array, un string, etc.    

ATENCIÓN ==> si quisiéramos usar el método reduce para una
multiplicación, deberíamos cambiar si o si el valor por defecto del
acumulador a 1, ya que todo multiplicado por 0 es 0 y la variable
sumReduce (en este caso) sería undefined o 0.*/

console.log(sumReduce);

// -----------------------------------------------------------------

console.log(' \nARRAY.PROTOTYPE.FILTER() \n');

/* filter() crea un nuevo array con todos los elementos de un array
anterior, que cumplan con ciertas condiciones, implementadas por
la función dada. ej:    */

var filterArray = ['arbol', 'casa', 'buque', 'agencia'];

// Quiero un array que sólo contenga elementos que empiecen con 'a'.

var filterArray2 = filterArray.filter(function(element){
    return element[0] == 'a';
})

// Se lee: filtrar al array filterArray, y solo obtener elementos cuyo
// indice cero sea igual a 'a'. Nuevo array creado:

console.log(filterArray2);
