import {
  displayProducts,
  searchProductById,
  filterProductsByCategory,
  sortProductsByPrice,
} from "./productOperation.js";

import { initializeUIEvents } from "./uiEvents.js";

// Display products when the page loads
displayProducts();

// Initialize all UI event listeners
initializeUIEvents();

// Keep these console-based operations for testing if needed.
// Remove or comment them out when testing the normal UI.

// searchProductById(101);
// filterProductsByCategory("Electronics");
// sortProductsByPrice("asc");
