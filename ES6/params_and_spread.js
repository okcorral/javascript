"use strict"

//Default Parameters
/*
function greet($greeting = 'Hello World'){
    console.log($greeting);
}

greet();
*/

//Spread Operator

let args = [1, 2, 3];

function test(){
    console.log(args);
}

//test.apply(null, args);
test(...args);

let parts = ['shoulders','knees']
let parts_all = ['head', ...parts, 'and','toes']

console.log(parts);
console.log(parts_all);