interface User {
  name: string;
  email: string;
}

interface Admin {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

function detectAdmin(acc: User | Admin) {
  if ("isAdmin" in acc) {
    return acc.isAdmin;
  }

  return false;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}


function detectArray(a: object | string) {
    if(a instanceof Object) {
        return a
    }

    return a.toLowerCase()
}

type Fish = {swim:() => void}
type Bird = {fly:() => void}

function detectFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish ).swim !== undefined
}

function getFood(pet: Fish | Bird) {
     if(detectFish(pet)) {
        pet
        return "Bird food"
     } else {
        pet
        return "bird food"
     }
}