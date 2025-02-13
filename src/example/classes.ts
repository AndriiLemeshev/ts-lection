// Base class Animal
class Animal {
    public name: string; // Public field (accessible from anywhere)
    protected species: string; // Protected field (accessible within the class and derived classes)
    private age: number; // Private field (accessible only within the class)

    // Constructor (used to initialize object properties)
    constructor(name: string, species: string, age: number) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    // Method (a function associated with the class)
    public makeSound(): string {
        return "Generic animal sound";
    }

    protected getSpecies(): string { // Protected method
        return this.species;
    }

    private getAge(): number { // Private method
        return this.age;
    }

    public getAnimalInfo(): string {
        return `Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`; // Accessing private field inside the class
    }
}

// Derived class Dog, inheriting from Animal
class Dog extends Animal {
    // Constructor (must call super() to invoke the parent class constructor)
    constructor(name: string, age: number, public breed: string) { // public field breed is defined in constructor
        super(name, "Canine", age); // Call the parent constructor to initialize inherited properties
    }

    // Overriding the makeSound() method
    public makeSound(): string {
        return "Woof!";
    }

    public getDogInfo(): string {
        return `${super.getAnimalInfo()}, Breed: ${this.breed}`; // Accessing protected method and public field from parent
    }
}

// Example usage:
const myAnimal = new Animal("Generic Animal", "Unknown", 5);
console.log(myAnimal.name); // Accessing public field
// console.log(myAnimal.age); // Error: Property 'age' is private and only accessible within class 'Animal'.
console.log(myAnimal.getAnimalInfo());

const myDog = new Dog("Buddy", 3, "Golden Retriever");
console.log(myDog.name); // Accessing inherited public field
console.log(myDog.breed); // Accessing public field of Dog
console.log(myDog.makeSound()); // Calling overridden method
console.log(myDog.getDogInfo());

// Polymorphism:
const animals: Animal[] = [myAnimal, myDog];
for (const animal of animals) {
    console.log(animal.makeSound()); // Polymorphic call to makeSound()
}


// Field definition in constructor (alternative approach):
class Cat extends Animal {
    constructor(name: string, age: number, public furColor: string) {  // furColor is defined and initialized directly in the constructor
        super(name, "Feline", age);
    }

    makeSound(): string {
        return "Meow!";
    }
}

const myCat = new Cat("Whiskers", 2, "Gray");
console.log(myCat.furColor); // Accessing the public furColor field
console.log(myCat.getAnimalInfo());
console.log(myCat.makeSound());
