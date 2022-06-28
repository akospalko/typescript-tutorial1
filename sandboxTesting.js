"use strict";
// Type any 
let age = 25; //Ok
console.log(age);
age = true; //Ok
console.log(age);
age = '25'; //Ok
console.log(age);
age = {
    born: 2069
};
//any with array
let mixedArr = [];
['a', 1, false].forEach(e => mixedArr.push(e));
console.log(mixedArr);
//object literal
let hero; // declaring obj with type any, without assigning them any value. 
hero = { name: 'alajos', age: 5 }; //OK
console.log(hero);
hero = { name: 5, age: 'brown' }; //OK -> see the problem of using any (name = number, favColor = str)
console.log(hero);
