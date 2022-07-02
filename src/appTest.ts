//Classes
class Invoices {
  //properties
  clientName: string;
  comment: string;
  amount: number;
  //constructor
  constructor(cN: string, c: string, a: number) {
    this.clientName = cN;
    this.comment = c;
    this.amount = a;  
  }
  //method
  format() {
    return `${this.clientName} owes $${this.amount} for ${this.comment}`;
  }
}

let invoice1 = new Invoices('jonny', 'a watch purchase', 600);
let invoice2 = new Invoices('alice', 'a bicycle purchase', 250);
console.log(invoice1.format());
console.log(invoice2.format());

//Change properties

invoice1.clientName = "Ferike"; //OK
invoice2.clientName = "Aranka"; //OK



// array of class type
let invoiceArr: Invoices[] = [];

invoiceArr.push(invoice1);
invoiceArr.push(invoice2);

console.log(invoiceArr);



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

  console.log(
    typeElement.value, 
    tofromElement.value, 
    detailsElement.value, 
    amountElement.valueAsNumber
  );
});