//import interface
import {HasFormatter} from '../interfaces/HasFormatterTest.js';

//blueprint for payments
export class Payments implements HasFormatter {
    readonly recipientName: string;
    comment: string;
    private amount: number; 
    constructor(rN: string, c: string, a: number) {
        this.recipientName = rN;
        this.comment = c;
        this.amount = a;  
    }
    toFormat() {
        return `${this.recipientName} is owed $${this.amount} for ${this.comment}`;
    }
}
  