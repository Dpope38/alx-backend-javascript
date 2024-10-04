export default function createIteratorObject(report) {
  const employees = [];

  // Loop through each department and push its employees into the employees array
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  // Create an iterator for the employees array
  return employees[Symbol.iterator]();
}
