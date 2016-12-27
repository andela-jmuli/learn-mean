/*
A module in es6 is a single file that allows code and data to be isolated, it helps in organizing and
grouping code logically. In other languages it's called a package or library

Web browsers have no concept of modules or import, they just know how to load js code. This is where a module
loader comes into play.
The popular choices are:
1. RequireJS
2. SystemJS
3. Webpack
 */

// An example using SystemJS
/*
The script first loads the code for the SystemJS library, then the function call System.import is used to import(load)
the app module.
In an ES6-compliant browser you use the System keyword to load modules asynchronously.  To make our code work with current browsers,
however, we will use the SystemJS library as a polyfill:

*/
<script src="/node_modules/systemjs/dist/system.js"></script>
<script>
    var promise = System.import('app')
    .then(function(){
        console.log('Loaded!');
    })
    .then(null, function(error){
        console.error('Failed to load:', error);
    });
</script>