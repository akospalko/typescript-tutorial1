"use strict";
//Using function type
//let userLog: Function // function type
//Function signatures (general structure of a function: args, return type)
//e.g. 1
var userLog; // like a boilerplate for a function
userLog = function (name, id) {
    console.log("user name: ".concat(name, ", user id: ").concat(id));
};
userLog('Papó', '1'); //ok
//e.g. 2
var addNums; //function signature
addNums = function (numberA, numberB, operation) {
    if (operation === 'add' || operation === '+') {
        return numberA + numberB;
    }
    else {
        return numberA - numberB;
    }
};
addNums(10, 2, '+');
var logUser;
logUser = function (hero) {
    console.log(hero.name, ' is ', hero.age, 'years old.');
};
logUser({ name: 'monkey king', age: 20 });
