const students = new Set();

students.add(101);
students.add(102);
students.add(103);

console.log("Total Students:", students.size);

console.log("Contains 102?", students.has(102));

students.delete(102);

console.log("After Deletion:");

for (let roll of students) {
    console.log(roll);
}

console.log("All Values:", [...students]);

students.clear();

console.log("After Clear:", students.size);