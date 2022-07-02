"use strict";
//Classes
var Invoices = /** @class */ (function () {
    //constructor
    function Invoices(cN, c, a) {
        this.clientName = cN;
        this.comment = c;
        this.amount = a;
    }
    //method
    Invoices.prototype.format = function () {
        return "".concat(this.clientName, " owes $").concat(this.amount, " for ").concat(this.comment);
    };
    return Invoices;
}());
var invoice1 = new Invoices('jonny', 'a watch purchase', 600);
var invoice2 = new Invoices('alice', 'a bicycle purchase', 250);
console.log(invoice1.format());
console.log(invoice2.format());
//Change properties
invoice1.clientName = "Ferike"; //OK
invoice2.clientName = "Aranka"; //OK
// array of class type
var invoiceArr = [];
invoiceArr.push(invoice1);
invoiceArr.push(invoice2);
console.log(invoiceArr);
//DOM
var formElement = document.querySelector('.new-item-form');
console.log(formElement.children);
// inputs
var typeElement = document.querySelector('#type');
var tofromElement = document.querySelector('#tofrom');
var detailsElement = document.querySelector('#details');
var amountElement = document.querySelector('#amount');
formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(typeElement.value, tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
});
