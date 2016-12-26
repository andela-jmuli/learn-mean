/*
A spread operator allows in-place expansion for the following cases:
1. Array
2. Function call
3. Multiple variable destructing

The Rest operator works in the opposite direction of the spread operator, it collects an indefinite
number of comma seperated expressions into an array.

 */

//Operator spread
// Spread example:

const add = (a,b) => a + b;
let args = [3,5];
add(...args); // same as `add(args[0], args[1]`, or `add.apply(null, args)`

/*
Functions aren't the only place in JavaScript that makes use of comma seperated lists -arrays can also be concatenated with ease:
 */
let cde = ['c', 'd', 'e'];
let scale = ['a', 'b', ...cde, 'f','g']; // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// Similarly, object literals can do the same thing:

let mapABC = {a:5, b:6, c:3};
let mapABCD = {...mapABC, d:7}; //{a:5,b:6,c:3,d:7}


// Operator Rest
/*
Rest arguments share the ellipsis like syntax of rest operators but are used for a different purpose. Rest arguments are used to access
a variable number of arguments passed to a function.
 */
