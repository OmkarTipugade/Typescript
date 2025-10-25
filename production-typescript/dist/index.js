"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Typescript is here");
// class User {
//     name: string;
//     private email: string;
//     readonly city: string = "Kolhapur"
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
class User {
    name;
    email;
    city = "Kolhapur";
    courseCount = 1;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    deleteToken = () => {
        return "token is deleted";
    };
    get userName() {
        return `username: ${this.name}`;
    }
    set setEmail(email) {
        if (this.email.endsWith("@dev.com")) {
            this.email = email;
        }
    }
}
class SubUser extends User {
    isFamily = false;
    updateCourseCount() {
        this.courseCount = 5;
    }
}
const om = new User("Omkar", "om@dev.com");
