"use strict";
//w/o type alias
/*
const logUser = (uid: string | number, userName: string): void => {
    console.log(`${userName} has the id of ${uid}`);
}
logUser(0,'Admin');
*/
//using type alias
var logUser = function (uid, userName) {
    console.log("".concat(userName, " has the id of ").concat(uid));
};
logUser(0, 'Admin');
//defining the same parameters over two different functions:
//cons: duplicate (not clean) code.
/*
 const greet = (user : {name: string, uid: string | number}): void => { // duplicate code for type
    console.log(`Hello ${user.name} (id: ${user.uid})`);
}
greet({name:"Moon", uid: 512}); //Ok

const greetAgain = (user : {name: string, uid: string | number}): void => { // duplicate code for type
    console.log(`Hello ${user.name} (id: ${user.uid})`);
}
*/
// using type alias (clean code) to pass the same args to two different functions
var greet = function (user) {
    console.log("Hello ".concat(user.name, " (id: ").concat(user.uid, ")"));
};
greet({ name: "Moon", uid: 512 }); //Ok
var greetAgain = function (user) {
    console.log("Hello ".concat(user.name, " (id: ").concat(user.uid, ")"));
};
