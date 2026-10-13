class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.course}`);
    }
}

const student1 = new Student("Chitra", 21, "M.Sc. Computer Science");

student1.displayDetails();