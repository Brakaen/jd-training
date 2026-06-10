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