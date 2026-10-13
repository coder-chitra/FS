class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayCar() {
        console.log(`${this.brand} - ${this.model}`);
    }
}

const car1 = new Car("Toyota", "Innova");
const car2 = new Car("Honda", "City");

car1.displayCar();
car2.displayCar();