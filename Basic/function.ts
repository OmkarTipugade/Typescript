function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(5))

const toUpperCase = (str: string) : string => {
    return str.toUpperCase();
}

console.log(toUpperCase("omkar"))

const loginUser = (username: string, email: string, isPaid: boolean = false) => {
    
    console.log(`${username} ${email} is logged in`)
}

loginUser("omkar3904","omtipu@gamil.com")
export{}