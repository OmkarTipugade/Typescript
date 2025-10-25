
interface Database {
    connUrl: string,
    username: string,
    password: string 
}

function anotherFunction<T,U extends Database>(valOne: T,valTwo: U): object {
    return {
        valOne,
        valTwo 
    }
}
anotherFunction(5,{
    connUrl: "mongodb://username:pass.net?",
    username:"omkar3904",
    password:"sdkjowoefo"
})  


interface Quiz {
    type: string
    name: string
}

interface  Course {
    subject: string,
    author: string,
    name: string
}


class sellable<Type> {
    public cart : Type[] = []

    addTocart(product: Type)  {
        this.cart.push(product)
    }
}


let courses = new sellable<Course>;

courses.addTocart({
    author: "Omkar",
    name: "AI agents",
    subject:"AI"
})

console.log(courses.cart)