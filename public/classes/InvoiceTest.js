//blueprint for invoices
export class Invoices {
    //constructor
    constructor(cN, c, a) {
        this.clientName = cN;
        this.comment = c;
        this.amount = a;
    }
    //method
    toFormat() {
        return `${this.clientName} owes $${this.amount} for ${this.comment}`;
    }
}
