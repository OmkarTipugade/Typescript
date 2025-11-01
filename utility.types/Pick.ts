interface student1 {
    name: string,
    rollNo: number,
    phoneNo: string,
    email: string
}


const st2 : Pick<student1,'name' |'rollNo'|'email'> = {
    name: 'Omkar',
    rollNo: 32,
    email: "om@gmail.com",
}
