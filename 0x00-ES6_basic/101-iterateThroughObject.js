export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator to get employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names with '|' separator and return the resulting string
  return employeeNames.join(' | ');
}