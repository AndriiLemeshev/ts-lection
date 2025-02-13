// Number
let age: number = 30;
let price: number = 99.99;

// String
let name: string = "Alice";
let message: string = `Hello, ${name}!`; // Template literal

// Boolean
let isLoggedIn: boolean = true;
let isStudent: boolean = false;

// Any (Use with caution!)
let flexibleVar: any = "This could be a string";
flexibleVar = 123; // Now it's a number
flexibleVar = true; // And now a boolean

// Unknown (Type-safe alternative to any)
let maybeNumber: unknown = 42;
// let result: number = maybeNumber + 10;  // Error: Operator '+' cannot be applied to types 'unknown' and 'number'.
if (typeof maybeNumber === 'number') {
    let result: number = maybeNumber + 10; // Type guard ensures it's a number here
    console.log(result);
}

// Void (For functions that don't return a value)
function greet(person: string): void {
  console.log(`Hello, ${person}!`);
}
greet("Bob");

// Never (For functions that never return, like throwing an exception)
function throwError(message: string): never {
  throw new Error(message);
}
// try {
//     throwError("Something went wrong!"); // This will stop the execution
// } catch (error) {
//     console.error(error);
// }

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"]; // Generic array type

// Tuple (Fixed-length array with specific types)
let person: [string, number, boolean] = ["Eve", 25, true];
let [personName, personAge, isEmployed] = person; // Destructuring tuple

// Object
let user: object = {
  name: "David",
  age: 40,
};
// user = "David"; // Error: Type 'string' is not assignable to type 'object'
