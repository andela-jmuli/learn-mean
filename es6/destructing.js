/*
Destructing is a way to quickly extract data out if an {} or [] without having to write much code.

 */


// Destructing can be used to turn the following:
let foo = ['one', 'two'];

let one = foo[0];
let two = foo[1];

// into

let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;

console.log(one); // 'one'

/*
ES6 also supports object destructing, which might make use cases easier; i.e.

Destructing can e used for passing objects into a function, allowing you to pull specific properties
out of an object in a concise manner. It is also possible to assign default values to destructed arguments,
which can be a useful pattern is passing in a configuration object.
i.e.
*/

let jane = { firstName: 'Jane', lastName: 'Doe'};
let john = { firstName: 'John', lastName: 'Doe', middleName: 'Smith' };

function sayName({firstName, lastName, middleName = 'N/A'}){
    console.log(`Hello ${firstName} ${middleName} ${lastName}`)
}

sayName(jane) // -> Hello Jane N/A Doe
sayName(john) // -> Hello John Smith Doe