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
  readonly city: string = "Kolhapur";
  protected courseCount = 1;
  constructor(public name: string, public email: string) // private id: string
  {}

  private deleteToken = (): string => {
    return "token is deleted";
  };

  get userName() : string  {
    return `username: ${this.name}`
  }

  set setEmail(email : string) {
    if(this.email.endsWith("@dev.com")) {
        this.email = email
    }
  }
}


class SubUser extends User {
     isFamily: boolean = false

     updateCourseCount() {
        this.courseCount = 5
     }
}
const om = new User("Omkar", "om@dev.com");
