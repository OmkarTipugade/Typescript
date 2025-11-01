interface Bike {
  No: string;
  price: number;
  engine: string;
  engineType: string;
  company: string;
}

type APIResponse =
  | "loading"
  | "terminate"
  | "pending"
  | "success"
  | "processing";

// Exclude; Exclude types to being assigne

let API1Res: Exclude<APIResponse, "terminate"> = "loading"; 
let API2Res: Exclude<APIResponse, "processing" | "terminate"> = "success";
// API2Res = 'processing'

