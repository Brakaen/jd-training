const user = { name: "Alex", age: 25, role: "Developer" };

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}