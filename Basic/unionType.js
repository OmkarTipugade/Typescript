var score = 55;
score = "55";
var u = {
    username: "omkar",
    email: "om@dev.com",
};
// const getId = (id: number | string) => {
//     console.log(id);
// }
var getId = function (id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    if (typeof id === "number") {
        return id + 5;
    }
};
getId(4);
getId("55");
var data = [1, 3, "5", "9", 7, true];
