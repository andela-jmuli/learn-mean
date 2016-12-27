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
// i.e.

function addSimple(a, b){
    return a + b;
}

function add(...numbers){
    return numbers[0] + numbers[1]; 
}

addSimple(3,2); // 5
add(3,2); // 5

// or in es6:
const addEs6 = (...numbers) => numbers.reduce((p,c) => p +c, 0);

addEs6(1,2,3); // 6

/*
Technically JavaScript already had an arguments var set on each function(except for arrow functions), however arguments has a lot of issues, one 
of which is the fact that it is not technically an array.

Rest args are in fact arrays. The other important difference is that rest arguments only include arguments not specifically named in a function
i.e.
 */

function print(a, b, c, ...more){
    console.log(more[0]);
    console.log(more[1]);
    console.log(arguments[0]);
    console.log(arguments[1])
}

print(1,2,3,4,5);
// 4
// 5
// 1
// 2