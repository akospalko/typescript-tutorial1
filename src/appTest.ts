
//Importing modules
import {Invoices} from './classes/InvoiceTest.js'; // even though we develop a .ts file, the browser can only work with a .js file. 
import {Payments} from './classes/PaymentTest.js'; // even though we develop a .ts file, the browser can only work with a .js file. 
import {HasFormatter} from './interfaces/HasFormatterTest';
/*
//Implementing an interface
let docOne: HasFormatter; // here we specify that docOne should implement the HasFormatter interface 
let docTwo: HasFormatter; // -.-.-

//Creating obj instances 
docOne = new Invoices('aranka', 'dress', 150);
docTwo = new Payments('rozi', 'orange', 25);
 
//Creating an array of objs which implement interface
let docArr: HasFormatter[] = [];
docArr.push(docOne); 
docArr.push(docTwo);

console.log(docArr);
*/

//Interfaces -> used to enforce a certain type of structure
interface PersonInterface {
  name: string,
  age: number,
  speak(a: string): void,
  spend(a: number): number
};
//const Player1: PersonInterface = {}; // Error, this obj doesn't comply to PersonInterface 

const Player2: PersonInterface = { //OK
  name: "UserOne",
  age: 69,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent this amount:", amount);
    return amount;
  }
  //skills: [] // Error, PersonInterface doesn't comply this prop
}
//Apply interface to a function 
const greetUser = (user: PersonInterface): void => {
  console.log(`Hey ${user.name}`);
}
greetUser(Player2);

let invoice1 = new Invoices('jonny', 'a watch purchase', 600);
let invoice2 = new Invoices('alice', 'a bicycle purchase', 250);
console.log(invoice1.toFormat());
console.log(invoice2.toFormat());

//Change properties
//invoice1.clientName = "Ferike"; //Type Error for read only prop (only type enforced)
//invoice2.clientName = "Aranka"; //Type Error for read only prop

// Array of class type
let invoiceArr: Invoices[] = [];
invoiceArr.push(invoice1);
invoiceArr.push(invoice2);

invoiceArr.forEach(e => {
  console.log(e.clientName, /*e.#comment, e.amount,*/ e.toFormat()); // although e.amount is a private property it will run -> type script doesn't imply real conversion  
})

//DOM
const formElement = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formElement.children);

// inputs
const typeElement = document.querySelector('#type') as HTMLInputElement;
const tofromElement = document.querySelector('#tofrom') as HTMLInputElement;
const detailsElement = document.querySelector('#details') as HTMLInputElement;
const amountElement = document.querySelector('#amount') as HTMLInputElement;

formElement.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if(typeElement.value === "invoice") {
    doc = new Invoices(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
  } else {
    doc = new Payments(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
  }
  console.log(doc);
});

