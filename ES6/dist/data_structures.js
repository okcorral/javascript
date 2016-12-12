"use strict";
/*
let myArray = [11,22,33,44,55];

let mySet = new Set(myArray);

console.log(mySet);

mySet.add('100');

console.log(mySet);

mySet.add({a:1, b:2})

console.log(mySet);

mySet.delete(22)

console.log(mySet);
console.log(mySet.size);

console.log('');

mySet.forEach(function(val){
    console.log(val);
});
*/

/*
let myMap = new Map([['a1','Hello'],['b2','Goodbye']]);

console.log(myMap);
myMap.set('c3','Foo');
console.log(myMap);
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size);
*/

var carWeakSet = new WeakSet();
var car1 = {
    make: 'Honda',
    model: 'Civic'
};

carWeakSet.add(car1);
console.log(carWeakSet);

var car2 = {
    make: 'Toyota',
    model: 'Forerunner'
};

carWeakSet.add(car1);
console.log(carWeakSet);
//# sourceMappingURL=data_structures.js.map