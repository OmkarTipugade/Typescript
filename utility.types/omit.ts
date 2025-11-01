interface  Car {
    colour: string,
    engine: string,
    engineType: string,
    carNo: string
}
// Omit; takes not required topics
const c1: Omit<Car,'colour'> = {
    engine: "1050cc",
    engineType: "EV",
    carNo: "MH-09-DK-3904"
}