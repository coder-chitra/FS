interface Student {
    readonly id: number;
    name: string;
}

const student: Student = {
    id: 101,
    name: "Chitra"
};

console.log(student);

// student.id = 102; // Error