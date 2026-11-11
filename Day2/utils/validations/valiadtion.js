// Check whether product ID is a valid positive integer
export function isValidProductId(id) {
  return Number.isInteger(id) && id > 0;
}

// Check whether quantity is a positive integer
export function isValidQuantity(quantity) {
  return Number.isInteger(quantity) && quantity > 0;
}

// Check whether a value is a valid positive number
export function isValidPrice(price) {
  return typeof price === "number" && Number.isFinite(price) && price > 0;
}

// Check whether a value is an array
export function isValidArray(value) {
  return Array.isArray(value);
}
export function isValidString(value) {
  return typeof value === "string" && value.trim() !== "";
}

// Check sorting order
export function isValidSortOrder(order) {
  return order === "asc" || order === "desc";
}
