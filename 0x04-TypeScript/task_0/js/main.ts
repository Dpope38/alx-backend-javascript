// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
  const body: HTMLBodyElement | null = document.querySelector("body");
  const table: HTMLTableElement = document.createElement("table");
  const tableHead: HTMLTableSectionElement = table.createTHead();
  const headRow: HTMLTableRowElement = tableHead.insertRow();
  const headers: string[] = ["First Name", "Location"];

  headers.forEach((header: string) => {
    const th: HTMLTableCellElement = document.createElement("th");
    th.textContent = header;
    headRow.appendChild(th);
  });

  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  if (body) {
    body.appendChild(table);
  }
}

// Call the renderTable function when the DOM is loaded
document.addEventListener("DOMContentLoaded", renderTable);
