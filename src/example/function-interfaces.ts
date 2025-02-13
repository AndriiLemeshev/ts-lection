// Define a function interface
interface MathOperation {
    (a: number, b: number): number;
}

// Create functions that satisfy the MathOperation interface
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero!");
    }
    return a / b;
};

// Function that uses the MathOperation interface
function operate(a: number, b: number, operation: MathOperation): number {
    return operation(a, b);
}

// Example usage:
console.log(operate(5, 3, add));       // Output: 8
console.log(operate(10, 2, subtract));  // Output: 8
console.log(operate(4, 6, multiply));   // Output: 24
try {
    console.log(operate(10, 0, divide)); // Throws an error
} catch (error) {
    console.error((error as Error).message);      // Output: Division by zero!
}

// Iterates over an array of strings and calls a callback function for each element.
function arrayIterator(arr: string[], callbak: (it: string) => void): void {
    arr.forEach(callbak);
}

arrayIterator(['jeden', 'dwa'], it => { console.log(it.toUpperCase()); });
