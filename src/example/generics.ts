// Generic function to reverse an array of any type
function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse(); // slice() creates a copy to avoid modifying the original array
}

// Example usage of the generic function
const numbersArray = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbersArray);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

const strings = ["apple", "banana", "cherry"];
const reversedStrings = reverseArray(strings);
console.log(reversedStrings); // Output: ["cherry", "banana", "apple"]

// Generic class representing a Box that can hold any type
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

// Example usage of the generic class
const numberBox = new Box<number>(10);
console.log(numberBox.getValue()); // Output: 10
numberBox.setValue(20);
console.log(numberBox.getValue()); // Output: 20


const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // Output: Hello

// Generic class with multiple type parameters
class Pair<T, U> {
    private first: T;
    private second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    getFirst(): T {
        return this.first;
    }

    getSecond(): U {
        return this.second;
    }
}

const myPair = new Pair<string, number>("Key", 123);
console.log(myPair.getFirst());  // Output: Key
console.log(myPair.getSecond()); // Output: 123

// Generic interface
interface List<T> {
    addItem(item: T): void;
    getItems(): T[];
}

// Class that implements the generic interface
class MyList<T> implements List<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const numList = new MyList<number>();
numList.addItem(1);
numList.addItem(2);
console.log(numList.getItems()); // Output: [1, 2]

const strList = new MyList<string>();
strList.addItem("a");
strList.addItem("b");
console.log(strList.getItems()); // Output: ["a", "b"]


// Generic function with constraints
function mergeArrays<T extends { id: number }>(arr1: T[], arr2: T[]): T[] {
    const merged = [...arr1, ...arr2];
    // Example of using the id property (constraint)
    merged.sort((a, b) => a.id - b.id);
    return merged;
}

interface Item {
    id: number;
    name: string;
}

const items1: Item[] = [{ id: 1, name: "Item 1" }, { id: 3, name: "Item 3" }];
const items2: Item[] = [{ id: 2, name: "Item 2" }, { id: 4, name: "Item 4" }];

const mergedItems = mergeArrays(items1, items2);
console.log(mergedItems); // Output: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }, { id: 3, name: "Item 3" }, { id: 4, name: "Item 4" }]
