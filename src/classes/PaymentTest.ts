import { HasFormatter } from '../interfaces/HasFormatterTest.js';

export class Payments implements HasFormatter{
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ){};

  toFormat() {
    return`${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}