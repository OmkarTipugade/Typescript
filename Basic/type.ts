type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: {
    number: number,
    cvv: number
  }
};

let u: User = {
  _id: "d43wdkj",
  name: "Omkar",
  email: "om@gamil.com",
  isActive: false,
};

u.name = "Omkar T."
// u._id = "skjd32"
export {};
