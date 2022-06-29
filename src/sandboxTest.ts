// declaring a var with Function type
let sayHi: Function; 

//sayHi = 'name'; // Error, we can only assign Function type to the var.  

sayHi = () => { //Ok
    console.log("Hello guys!");
}
sayHi();

//Typing function parameters  
const addition = (a: number, b: number) => {  
    console.log(a + b);
};
addition(5, 10); //Ok
//addition(5, '10'); //Error, passed string type as arg.

//optional(?) parameter using union(|)
const addition2 = (a: number, b: number, c?: number | string) => { 
   console.log(a + b); //Ok
   console.log(c); //Ok, if c is passed -> either num or string if empty arg -> undefined
};

addition2(1, 2, '3'); 

//return types
const substraction = (a: number, b: number): number => { // if : number is missing -> we the return type is inferred
    return a - b;
} 

substraction(50, 25); //Ok