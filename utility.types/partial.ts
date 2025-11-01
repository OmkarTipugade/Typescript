interface User {
    fname: string,
    lname: string,
    age: number,
    email: string,
}

// Partial make all properties optional
const u1 : Partial<User> = {
    fname: "omkar",
    lname: "tipugade"
}