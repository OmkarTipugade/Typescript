interface User {
  readonly db_id: string;
  name: string;
  _id: number;
  google_token?: string;
  getUserMesseges(): object;
  getEntryPass(username: string, id: number): string;
}

interface User {
  github_token : string
}

interface Seller {
  seller_id?: string
}

interface Admin extends User, Seller {
  role: 'admin' | "user" | 'TA'
}
const KUser: Admin = {
  role: "admin", 
  db_id: "db29494",
  name: "Omkar", 
  _id: 2331,
  getUserMesseges: () => {
    return {
      msg: "user masseges",
    };
  },
  getEntryPass: (user: "sdkjf", number: 33) => {
    return "psdkfe";
  },
  github_token: "github394"
};

KUser.name = "Om";
export {};
