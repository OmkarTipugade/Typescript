let user : [string, number, boolean ]

user = ["Omkar", 11, true]

// user = [true, "djfls", 11] not valid

type tuser = [string, boolean, number]


const newUser : tuser = ["Omkar", false, 11]
 
newUser[0] = "Om"
newUser.push(11) // not valid
