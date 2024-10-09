// Exporting a constant instance of WeakMap
export const weakMap = new WeakMap();

// Exporting the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in weakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count for the endpoint
  count += 1;

  // Update the count in weakMap
  weakMap.set(endpoint, count);

  // Throw an error if the count reaches 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
