//DOM manipulation and types
//Implied DOM type (HTMLAnchorElement)
const aTag = document.querySelector('a')/*!*/;  //store the anchor tag in a container; If we use ! at the end we can remove null value

//Error Prone:
//console.log(aTag.href); //type script doesn't know if index.html has an anchor tag in dev mode -> if true: we can acces its props; if false: null, cannot access props.

//Avoid error #1:
console.log(aTag?.href);  //use optional chaining to avoid error occuring from null value

//Avoid error #2:
if(aTag) { // check if aTag exists to avoid undefined type error. 
  console.log(aTag.href); 
}

//Type casting from a type script implied type (Element | null) to the correspondent type (HTMLFormElement);
//Why to use it -> if we know the exact type of the container IntelliSense will provide us the corresponding props.
//0. No type cast: error prone
let formElement0 = document.querySelector('.new-item-form');
//1. Using: <typeName> ... 
let formElement1 = document.querySelector('.new-item-form') as HTMLFormElement; 
//2. Using: ... as typeName
let formElement2 = <HTMLFormElement> document.querySelector('.new-item-form'); 
console.log(formElement0.children); // It works now, without IntelliSense help, but if we don't have a form element we get an Error.
console.log(formElement1.children) // OK. We can access all the children of the form w/o any error because we already know the type

//Type casting to HTMLSelectElement
const typeSelect = document.querySelector('#type') as HTMLSelectElement;
//Type casting to HTMLInputElement
const toFromInput = document.querySelector('#tofrom') as HTMLInputElement;
const detailsInput = document.querySelector('#details') as HTMLInputElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;

//Event handler and  Event type)
formElement1.addEventListener('submit', (e:Event) => {
  e.preventDefault();

  console.log(
    typeSelect.value,
    toFromInput.value,
    detailsInput.value,
    amountInput.valueAsNumber // converts the input string value to a number
  );
})

