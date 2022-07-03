//blueprint for payments
export class Payments {
    constructor(rN, c, a) {
        this.recipientName = rN;
        this.comment = c;
        this.amount = a;
    }
    toFormat() {
        return `${this.recipientName} is owed $${this.amount} for ${this.comment}`;
    }
}
