interface User {
    fname: string,
    lname: string,
    age: number,
    email: string,
}

//Required makes all properties required
const u2 : Required<User> = {
    fname: "omkar",
    lname: "tipugade",
    age: 21,
    email: "om@gmai.com"
}