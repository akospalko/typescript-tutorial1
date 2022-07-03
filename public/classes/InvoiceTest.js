var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Invoices_comment;
//blueprint for invoices
export class Invoices {
    //constructor
    constructor(cN, c, a) {
        _Invoices_comment.set(this, void 0); // #propName -> private at type checking and at runtime (JS feature)
        this.clientName = cN;
        __classPrivateFieldSet(this, _Invoices_comment, c, "f");
        this.amount = a;
    }
    //method
    format() {
        return `${this.clientName} owes $${this.amount} for ${__classPrivateFieldGet(this, _Invoices_comment, "f")}`;
    }
}
_Invoices_comment = new WeakMap();
