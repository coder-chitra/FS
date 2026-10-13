const employees = new Map();

employees.set(101, "Chitra");
employees.set(102, "Abdul");
employees.set(103, "Neeraja");

console.log("Total Employees:", employees.size);

console.log("Employee 102:", employees.get(102));

console.log("Exists?", employees.has(101));

employees.delete(103);

for (let [id, name] of employees) {
    console.log(id, name);
}

console.log("Keys:", [...employees.keys()]);
console.log("Values:", [...employees.values()]);

employees.clear();

console.log("Size After Clear:", employees.size);