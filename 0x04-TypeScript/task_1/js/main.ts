interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Example usage:
const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true  // additional attribute
};

const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: "London",
    specialization: "Math"  // additional attribute
};

// Attempting to modify readonly properties will result in a TypeScript error
// teacher1.firstName = "Jack";  // Error: Cannot assign to 'firstName' because it is a read-only property.

console.log(teacher1);
console.log(teacher2);

