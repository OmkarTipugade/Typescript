"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectAdmin(acc) {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function detectArray(a) {
    if (a instanceof Object) {
        return a;
    }
    return a.toLowerCase();
}
function detectFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (detectFish(pet)) {
        pet;
        return "Bird food";
    }
    else {
        pet;
        return "bird food";
    }
}
