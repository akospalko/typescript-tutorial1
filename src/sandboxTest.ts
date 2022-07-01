//Using function type
//let userLog: Function // function type

//Function signatures (general structure of a function: args, return type)
//e.g. 1
let userLog: (a: string, b: string) => void; // like a boilerplate for a function

userLog = (name: string, id: string): void => {
    console.log(`user name: ${name}, user id: ${id}`);
}; 

userLog('Papó', '1'); //ok

//e.g. 2
let addNums: (a: number, b: number, x: string) => number; //function signature
addNums = (numberA: number, numberB: number, operation: string): number => {
    if(operation === 'add' || operation === '+') {
        return numberA + numberB;
    } else {
        return numberA - numberB;
    }
}
addNums(10,2,'+');


let logUser:(user: {name: string, age: number }) => void;


type userType = {name: string, age: number}; //custom type as function parameter 
logUser = (hero: userType): void => {
    console.log(hero.name, ' is ', hero.age, 'years old.');
}

logUser({name:'monkey king', age: 20});