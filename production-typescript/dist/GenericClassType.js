"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(5, {
    connUrl: "mongodb://username:pass.net?",
    username: "omkar3904",
    password: "sdkjowoefo"
});
class sellable {
    cart = [];
    addTocart(product) {
        this.cart.push(product);
    }
}
let courses = new sellable;
courses.addTocart({
    author: "Omkar",
    name: "AI agents",
    subject: "AI"
});
console.log(courses.cart);
