export default function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map and update items with quantity 1 to 100
  groceries.forEach((quantity, item) => {
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  });

  return groceries;
}
