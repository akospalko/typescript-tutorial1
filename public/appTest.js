//Importing modules
import { Invoices } from './classes/InvoiceTest.js';
import { ListTemplates } from './classes/ListTemplateTest.js';
import { Payments } from './classes/PaymentTest.js';
//DOM
const formElement = document.querySelector('.new-item-form');
console.log(formElement.children);
//Inputs
const typeElement = document.querySelector('#type');
const tofromElement = document.querySelector('#tofrom');
const detailsElement = document.querySelector('#details');
const amountElement = document.querySelector('#amount');
//list template instance (<ul>...</ul>)
let ul = document.querySelector('ul');
const list = new ListTemplates(ul);
//Create Invoice/Payment instances on submit form
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (typeElement.value === "invoice") {
        doc = new Invoices(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
    }
    else {
        doc = new Payments(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
    }
    console.log(doc);
    //render elements
    list.render(doc, typeElement.value, 'end'); // {{}, Invoice/Payment, 'end'|'start'}
});
