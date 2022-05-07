console.log(' \nFUNCTIONS \n')

/* Use the Keyword 'function' to define one, then goes the name
of the function and its parameters (or an empty pair of
parentheses if it takes no arguments), and then the function's
codeblock goes in between curly brackets. Curly brackets replace
in JS what the colon was in Python. Finally, the function is
called in the same way it would be in Python.    */
function heyWorld() {
    console.log('Hello, World');
}

heyWorld();

// How curly brackets are used to separate codeblocks:
function thisNumIs(x) {
    var num = x;
    var output;
    if (num < 0) {
        output = 'This number is negative.';
    }
    if (num >= 0) {
        output = 'This number is positive.';
    }
    console.log(output);
}

thisNumIs(8);
thisNumIs(-1);

/* Global and local scopes for variables work the same way as
in Python, but, if the keyword 'var' is not used when defining
a variable inside a function, said variable becomes global when
defined, or modifies the assigned value to an existing global
variable.

When in doubt, the JS interpreter will always prioritize
local scope variables when both local and global variables have
the same name.    */

// 'return' works in the same way as in Python.

/* Functions that return arithmetic outputs, for example, can be
used to assign the value of a variable. For example:    */
function modify(n) {
    return (n * 5) / 10;
}

var modifiedNum = modify(5)
console.log(modifiedNum)

/* Different from Python, in JS functions can  have multiple
'return' statements. Whenever a 'return' statement is reached,
the function task will stop and return the proper output.    */

// LOOK UP ARROW FUNCTIONS: ↓

/* var magic = function () {
    return new Date();
};

This is called Anonymous functions, when functions have no name.
It can be shortened even further by converting it into an arrow
function:

var magic = () => {
    return new Date();
};

As seen, there is an 'arrow' after the parentheses which simplifies
the writing, but it can be simplified even more:

var magic = () => new Date();    */

// FOR MORE ON FUNCTIONS, GO TO:
// https://www.youtube.com/watch?v=PkZNo7MFNFg  @2:47:17

var magic = function () {
    return new Date();
};

/* This is called Anonymous functions, when functions have no name.
It can be shortened even further by converting it into an arrow
function: */

var magic = () => {
    return new Date();
};

/* As seen, there is an 'arrow' after the parentheses which simplifies
the writing, but it can be simplified even more: */

var magic = () => new Date();


// -----------------------------------------------------------------