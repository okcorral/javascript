"use strict";

//Default Parameters
/*
function greet($greeting = 'Hello World'){
    console.log($greeting);
}

greet();
*/

//Spread Operator

var args = [1, 2, 3];

function test() {
    console.log(args);
}

//test.apply(null, args);
test.apply(undefined, args);

var parts = ['shoulders', 'knees'];
var parts_all = ['head'].concat(parts, ['and', 'toes']);

console.log(parts);
console.log(parts_all);
//# sourceMappingURL=params_and_spread.js.map