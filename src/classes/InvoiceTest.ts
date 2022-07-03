//blueprint for invoices
export class Invoices {
    //properties
    readonly clientName: string;
    #comment: string; // #propName -> private at type checking and at runtime (JS feature)
    private amount: number; // private -> private at type checking (only compliler enforced) (TS feature)
    //constructor
    constructor(cN: string, c: string, a: number) {
        this.clientName = cN;
        this.#comment = c;
        this.amount = a;  
    }
    //method
    format() {
        return `${this.clientName} owes $${this.amount} for ${this.#comment}`;
    }
  }
  