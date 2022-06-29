"use strict";
// declaring a var with Function type
var sayHi;
//sayHi = 'name'; // Error, we can only assign Function type to the var.  
sayHi = function () {
    console.log("Hello guys!");
};
sayHi();
//Typing function parameters  
var addition = function (a, b) {
    console.log(a + b);
};
addition(5, 10); //Ok
//addition(5, '10'); //Error, passed string type as arg.
//optional(?) parameter using union(|)
var addition2 = function (a, b, c) {
    console.log(a + b); //Ok
    console.log(c); //Ok, if c is a number -> console number, if 
};
addition2(1, 2, '3');
