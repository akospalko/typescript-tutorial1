//Arrays:
//Implicit string:
let names = ['pannika', 'ferike', 'jancsika'];
names.push('juliska'); // OK
names[0] = 'jolánka'; //OK
//names[1] = 3; // Error -> Array's implicit type is string
//names = 'pannika'; Error, cannot redeclare type -> redeclared type: string, initialized value type: array 
 names = ['pannika']; //Error, cannot redeclare to different type: should be array, given a string 
console.log(names);

//Implicit number:
let numbers = [1, 2, 3, 4];
//numbers.push('jolánka'); // Error
numbers.push(5); // Ok
console.log(numbers);

//Mixed Arr:
let mixed = ['jancsika', 15, false]; // not a  tuple (we can change order of elements)
//can push multiple types to it:
mixed.push('jenőke');
mixed.push(50);
mixed.push(true);
//mixed.push(['jenőke', 50, true]); // Error, arrays were not specified as specific type 
console.log(mixed);

//Objects:
let hero = {  //Ok
  name: 'mama',
  belt: 'black',
  age: 40
};
console.log(hero);

//1.cannot redeclare property types:
//hero.age = '40'; //Error

//2.cannot add extra properties:
//hero.superpower = [laser-eye, sharp-smell, pro cook]; //Error

//redeclared hero should match the initial obj's structure:
hero = { //Ok
  name: 'SuperMom',
  belt: 'pink',
  age: 30,
  //skills: ['pro cook'] // Error
}
console.log(hero);