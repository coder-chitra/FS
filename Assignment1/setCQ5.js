const uniqueId = Symbol("id");

const employee = {
    name: "Abdul",
    age: 23,
    [uniqueId]: 1001
};

for (let key in employee) {
    console.log(key, ":", employee[key]);
}

console.log("Symbol Value:", employee[uniqueId]);