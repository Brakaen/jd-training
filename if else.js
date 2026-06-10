let speed = 80;
if (speed >=95) {
    console.log("You are crossing the speed limit.");
} else if  (speed >= 80) {
    console.log("You are not speeding.");
} 
else if (speed >= 50) {
    console.log("You are driving at a safe speed.");
} else {
    console.log("You are driving too slow.");
}
const fruits = ["apple", "banana","orange"];
for (const fruit of fruits) {
    console.log(fruit);
}
let sales  = [12000, 18000, 15000, 22000, 25000];
for (const sale of sales) {
    console.log( sale);
};
let employeeNumber = 1;
for (const sale of sales) {
console.log(`Employee ${employeeNumber}: ${sale}`);
  employeeNumber++;
}
let Bonuss = sales.map(b => b + 2000);
for (const bonus of Bonuss) {
    console.log(bonus);
}
console.log("Sales: " + sales ); 
console.log("Bonuss: " + Bonuss);
// let sale = sales.filter(s => s > 20000);
//  console.log("Top performers: " + sale);
sales.forEach((sale, index) => {
    if (sale > 20000) {
        console.log(`Employee ${index + 1} :  ${sale}.`);
    }   
});