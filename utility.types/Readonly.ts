interface student {
    name: string,
    rollNo: number,
    contactInfo: {
        phoneNo: string,
        email: string
    }
}


const st1 : Readonly<student> = {
    name: 'Omkar',
    rollNo: 32,
    contactInfo: {
        email: "om@gmail.com",
        phoneNo: "33333"
    }
}

// Readonly make all properties readonly without nested objects
// st1["name"] = "lkdfjks"

st1["contactInfo"]["email"] = "omkar@dev.com"