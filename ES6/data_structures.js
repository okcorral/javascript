"use strict"
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
/*
let carWeakSet = new WeakSet();
let car1 = {
    make: 'Honda',
    model: 'Civic'
}

carWeakSet.add(car1);
console.log(carWeakSet);

let car2 = {
    make: 'Toyota',
    model: 'Forerunner'
}

carWeakSet.add(car2);
console.log(carWeakSet.size);
*/

let carWeakMap = new WeakMap();
let key1 = {
    id: 1
}
let car1 = {
    make: 'Honda',
    model: 'Civic'
}
carWeakMap.set(key1, car1);
console.log(carWeakMap);
