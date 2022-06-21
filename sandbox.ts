// basic types (inferred) -> we can redeclar them with different types
let character = 'mario'; 
let age = 25;
let savedPrincessFromDragon = false;

console.log(character,' ', age, ' ', savedPrincessFromDragon);

const circ = ( diameter:number ) => { // diamaeter -> implicit ; diameter:number -> explicit type 
    return diameter * Math.PI;
}

//console.log(circ(character)); // error, we passed a string type instead of a number
console.log(circ(6.5)); // error, we passed a string type instead of a number
