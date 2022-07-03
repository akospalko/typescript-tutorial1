"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Invoices_comment;
//Class property acessors
class Invoices {
    //constructor
    constructor(cN, c, a) {
        _Invoices_comment.set(this, void 0); // #propName -> private at type checking and at runtime (JS feature)
        this.clientName = cN;
        __classPrivateFieldSet(this, _Invoices_comment, c, "f");
        this.amount = a;
    }
    //method
    format() {
        return `${this.clientName} owes $${this.amount} for ${__classPrivateFieldGet(this, _Invoices_comment, "f")}`;
    }
}
_Invoices_comment = new WeakMap();
let invoice1 = new Invoices('jonny', 'a watch purchase', 600);
let invoice2 = new Invoices('alice', 'a bicycle purchase', 250);
console.log(invoice1.format());
console.log(invoice2.format());
//Change properties
//invoice1.clientName = "Ferike"; //Type Error for read only prop (only type enforced)
//invoice2.clientName = "Aranka"; //Type Error for read only prop
// Array of class type
let invoiceArr = [];
invoiceArr.push(invoice1);
invoiceArr.push(invoice2);
invoiceArr.forEach(e => {
    console.log(e.clientName, /*e.#comment, e.amount,*/ e.format()); // although e.amount is a private property it will run -> type script doesn't imply real conversion  
});
//DOM
const formElement = document.querySelector('.new-item-form');
console.log(formElement.children);
// inputs
const typeElement = document.querySelector('#type');
const tofromElement = document.querySelector('#tofrom');
const detailsElement = document.querySelector('#details');
const amountElement = document.querySelector('#amount');
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeElement.value, tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
});
