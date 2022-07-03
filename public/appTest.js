;
//const Player1: PersonInterface = {}; // Error, this obj doesn't comply to PersonInterface 
const Player2 = {
    name: "UserOne",
    age: 69,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent this amount:", amount);
        return amount;
    }
    //skills: [] // Error, PersonInterface doesn't comply this prop
};
//Apply interface to a function 
const greetUser = (user) => {
    console.log(`Hey ${user.name}`);
};
greetUser(Player2);
//Importing module
import { Invoices } from './classes/InvoiceTest.js'; // even though we develop a .ts file, the browser can only work with a .js file. 
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
