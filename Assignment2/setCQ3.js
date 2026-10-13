class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}

const car = new Car("Toyota", "Innova", 2023);

console.log(car.displayInfo());2