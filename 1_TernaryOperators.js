console.log(' \nTERNARY OPERATORS \n')

/* Ternary operators allow to have single-lined if-else statements
by using the question mark '?' symbol.    */

function checkHigher(a, b) {
    return a > b ? a : b;
} /* This reads: return + condition (a higher than b) + ? (if) +
     output if condition is true + colon (: - 'but if not true,
     return...) + output if condition is false.    */

console.log(checkHigher(5, 10));
console.log(checkHigher(100, 2));

// USING MULTIPLE TERNARY OPERATORS
console.log('');

function checkSign(num) {
    return num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero'
} /* After each colon ':', a new condition can be set, as if each
     colon ':' was an 'else if' statement, being the last colon ':'
     an 'else' statement.   */

console.log(checkSign(20));
console.log(checkSign(-100));
console.log(checkSign(0));

// -----------------------------------------------------------------