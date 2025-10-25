let score: number | string = 55;

score = "55";

type User = {
  name: string;
  email: string;
};

type Admin = {
  username: string;
  email: string;
};

let u: User | Admin = {
  username: "omkar",
  email: "om@dev.com",
};

// const getId = (id: number | string) => {
//     console.log(id);
// }
const getId = (id: number | string) => {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  if (typeof id === "number") {
    return id + 5;
  }
};

getId(4);
getId("55");

const data: (number | string | boolean)[] = [1, 3, "5", "9", 7, true];

let PI: 3.14 = 3.14

let seatAllotement : "aisle" | "middle" | "window";

// seatAllotement = "crew"
seatAllotement = "middle"
