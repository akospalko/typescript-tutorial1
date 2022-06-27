//Explicit primitives
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi' // Error, should be string;
age = 30;
isLoggedIn = true; // Ok

//Arrays
let ninjas: string[]; // array of strings 
//ninjas.push('sanyi'); // Error -> cannot push to an array that is not yet initialized with a value
ninjas = ['jóska, márió']; //Ok -> initialize ninjas with an array of strings
console.log(ninjas);

ninjas.push('sanyi'); // OK -> after array is initialize , we can push
console.log(ninjas);
//ninjas = [1, 2, 3]; // Error, not an arr of numbers

//Union:
//On Primitives:
let userID: string | number;
userID = '001'; // Ok
userID = 15; // Ok
//userID = false; // Error userID cannot have boolean value
//On Arrays:
//1. can be used to create mixed types:
//let mixedArray: [] = []; // It gets the type never
//mixedArray.push(5); // Error -> cannot assign type number to type never

let mixedArray: (number | string)[] = []; //Empty array of number and/or string
mixedArray.push('5'); //Ok 
mixedArray.push(10); //Ok
//mixedArray.push(false); // Error -> array cannot have type boolean
console.log(mixedArray);


//Objects:
let myHero: object; // only specifying the type of the base container (myHero) , de don't fix the type of props used inside.
myHero = {name: 'Mommy', age: 35}; //Ok
myHero = []; //Ok -> array is a type of obj
console.log(myHero);

//Specifying obj prop types
let yourHero: {
  name: string,
  age: number,
  beltColour: string
}

yourHero = {name: 'tomász', age: 25, beltColour: 'black'} // Ok
//yourHero = {name: 'tomász', /*skills: ['painting']*/ } // Error, we added an unspecified type to the arr.
console.log(yourHero);