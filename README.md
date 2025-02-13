# TypeScript for JavaScript Developers - Examples and Exercises

This repository contains examples, exercises, and unit tests designed to accompany an introductory course on TypeScript for JavaScript developers. It provides hands-on practice to solidify your understanding of TypeScript concepts.

## Introduction

This project is a practical supplement to the "TypeScript for JavaScript Developers" course.  It's designed to help you bridge the gap between JavaScript and TypeScript by providing concrete examples and challenging exercises. Each example focuses on a specific TypeScript feature, and the exercises allow you to apply what you've learned.  Unit tests are included to help you verify the correctness of your solutions.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/AndriiLemeshev/ts-lection.git](https://github.com/AndriiLemeshev/ts-lection.git)
    cd ts-lection
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the tests:**

    ```bash
    npm run repl
    npm run test
    npm run test-basic-types
    npm run test-enums
    npm run test-object-interfaces
    npm run test-classes
    npm run test-function-interfaces
    npm run test-generics
    ```

## Examples

The `example` directory contains several TypeScript files, each demonstrating a different concept.  Here's a brief overview:

-   `example/basic-types.ts`: Demonstrates the use of basic types like `number`, `string`, `boolean`, `any`, `unknown`, `void`, arrays, tuples, and objects.
-   `example/object-interfaces.ts`: Explores interfaces, their use in defining object shapes, and interface inheritance.
-   `example/classes.ts`: Covers classes, class inheritance, access modifiers (public, protected, private), constructors, and methods.
-   `example/generics.ts`: Illustrates the power of generics in creating reusable components and functions.
-   `example/enums.ts`: Shows how to define and use enums.
-   `example/function-object-interfaces.ts`: Covers function types, function interfaces, and higher-order functions.

To run an example:

1. Run TypeScript REPL with console command: `npm run repl`
2. Execute the next code to load file: `import "./src/example/basic-types"` (replace `basic-types.js` with the desired example filename).

## Exercises

The `task` directory contains subdirectories with incomplete implementations of problems (`.task.ts`) and commented unit test for validation (`.test.ts`).  Your task is to complete the code according to the instructions provided in the comments, uncomment unit test and validate it.

## Unit Tests

All unit tests can be run with next console command:

```bash
npm test
```
