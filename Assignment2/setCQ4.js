class Shape {
    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

const rect = new Rectangle(10, 5);

console.log("Area =", rect.area());