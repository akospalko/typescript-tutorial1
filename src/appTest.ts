//Importing modules
import { Invoices } from './classes/InvoiceTest.js'; 
import { ListTemplates } from './classes/ListTemplateTest.js';
import { Payments } from './classes/PaymentTest.js'; 
import { HasFormatter } from './interfaces/HasFormatterTest.js';
//DOM
const formElement = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formElement.children);
//Inputs
const typeElement = document.querySelector('#type') as HTMLInputElement;
const tofromElement = document.querySelector('#tofrom') as HTMLInputElement;
const detailsElement = document.querySelector('#details') as HTMLInputElement;
const amountElement = document.querySelector('#amount') as HTMLInputElement;

//list template instance (<ul>...</ul>)
let ul: HTMLUListElement = document.querySelector('ul')!;
const list = new ListTemplates(ul);

//Create Invoice/Payment instances on submit form
formElement.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(typeElement.value === "invoice") {
    doc = new Invoices(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
  } else {
    doc = new Payments(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
  }
  console.log(doc);
  //render elements
  list.render(doc, typeElement.value, 'end'); // {{}, Invoice/Payment, 'end'|'start'}
});
