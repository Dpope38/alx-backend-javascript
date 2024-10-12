// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage:
const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true  // additional attribute
};

const director: Directors = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "London",
    numberOfReports: 17,
    yearsOfExperience: 10  // optional attribute from Teacher
};

console.log(teacher);
console.log(director);

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

// Interface for the constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class itself
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Class that implements the above interface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage:
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName()); // Output: "John"
