class Animal {

    makeSound(): void {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {

    makeSound(): void {
        console.log("Dog barks");
    }
}

const dog = new Dog();

dog.makeSound();