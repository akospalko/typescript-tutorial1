//Type alias:
type stringOrNum = string | number; // predefined custom type
type objWithName = {name: string, uid: stringOrNum} // a type alias can be part of another type alias (see uid)
//w/o type alias
/*
const logUser = (uid: string | number, userName: string): void => {
    console.log(`${userName} has the id of ${uid}`);
}
logUser(0,'Admin');
*/

//using type alias
const logUser = (uid: stringOrNum, userName: string): void => {
    console.log(`${userName} has the id of ${uid}`);
}
logUser(0,'Admin');


//defining the same parameters over two different functions:
//cons: duplicate (not clean) code.
/*
 const greet = (user : {name: string, uid: string | number}): void => { // duplicate code for type
    console.log(`Hello ${user.name} (id: ${user.uid})`);
}
greet({name:"Moon", uid: 512}); //Ok

const greetAgain = (user : {name: string, uid: string | number}): void => { // duplicate code for type
    console.log(`Hello ${user.name} (id: ${user.uid})`);
}
*/

// using type alias (clean code) to pass the same args to two different functions
const greet = (user : objWithName): void => { // no duplicate code
    console.log(`Hello ${user.name} (id: ${user.uid})`);
}
greet({name:"Moon", uid: 512}); //Ok

const greetAgain = (user : objWithName): void => { // no duplicate code 
    console.log(`Hello ${user.name} (id: ${user.uid})`);
}