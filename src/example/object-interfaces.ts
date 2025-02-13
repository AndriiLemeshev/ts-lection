let employee: { name: string; age: number } = { // Inline declaration
    name: "David",
    age: 40,
};

interface Employee {
    name: string; // Mandatory property
    age: number;
    email?: string; // Optional property
}

let employees: Employee[] = [
    employee,
    { name: "Sam", age: 28, email: 'sam@corporation.com' }
];

interface Serializable {
    serialize(): string; // method
}

interface EmployeeTO extends Employee, Serializable { } // Interface inheritance
