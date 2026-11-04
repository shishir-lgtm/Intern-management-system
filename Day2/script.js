import {
  displayProducts,
  searchProductById,
  filterProductsByCategory,
  sortProductsByPrice,
} from "./productOperation.js";

import {
  addToCart,
  removeFromCart,
  updateCart,
  viewCart,
} from "./cartOperation.js";

import { generateOrderSummary } from "./orderSummary.js";

// =================================
// PRODUCT OPERATIONS
// =================================

console.log("\n========== PRODUCT OPERATIONS ==========");

displayProducts();

searchProductById(101);

filterProductsByCategory("Electronics");

sortProductsByPrice("asc");

// =================================
// CART OPERATIONS
// =================================

console.log("\n========== CART OPERATIONS ==========");

addToCart(101, 2);
addToCart(103, 3);

viewCart();

updateCart(101, 1);

removeFromCart(103, 1);

viewCart();

// =================================
// ORDER SUMMARY
// =================================

console.log("\n========== ORDER SUMMARY ==========");

generateOrderSummary("SAVE10");
