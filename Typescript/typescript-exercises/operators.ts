
let Book = [];

let poets: string[] = ['Shelley', 'Collins', 'Hughes'];
let authors: string[] = ['Toto', 'Mike', ...poets];
// using the rest operator
console.log(authors);