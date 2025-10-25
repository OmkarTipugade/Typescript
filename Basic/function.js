"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
var toUpperCase = function (str) {
    return str.toUpperCase();
};
console.log(toUpperCase("omkar"));
var loginUser = function (username, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("".concat(username, " ").concat(email, " is logged in"));
};
loginUser("omkar3904", "omtipu@gamil.com");
