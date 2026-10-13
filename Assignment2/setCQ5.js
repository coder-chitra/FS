class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Course: ${this.course}`);
    }
}

const student = new Student("Chitra", "M.Sc. CS");

student.display();