import { productCard } from "./productCard.js";
import { products } from "../../data/products.js";

import {
  isValidProductId,
  isValidString,
  isValidArray,
  isValidSortOrder,
} from "../../utils/validations/valiadtion.js";

// Display products on the UI
export function displayProducts(productsToDisplay = products) {
  if (!isValidArray(productsToDisplay)) {
    console.log("Invalid products data. Expected an array.");
    return;
  }

  const productsContainer = document.querySelector("#products-container");

  if (!productsContainer) {
    console.log("Products container not found.");
    return;
  }

  if (productsToDisplay.length === 0) {
    productsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  productsContainer.innerHTML = productsToDisplay
    .map((product) => {
      const isOutOfStock = product.stock <= 0 || !product.availability;
      return productCard(product, isOutOfStock);
    })
    .join("");
}

// Search products by name or ID
export function searchProducts(query, productsToSearch = products) {
  if (typeof query !== "string") {
    console.log("Search query must be a string.");
    return [];
  }

  if (!isValidArray(productsToSearch)) return [];

  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) return productsToSearch;

  return productsToSearch.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      String(product.id).includes(searchTerm)
    );
  });
}

// Search product by ID (existing console utility)
export function searchProductById(id) {
  if (!isValidProductId(id)) {
    console.log("Please provide a valid product ID.");
    return;
  }

  const product = products.find((product) => product.id === id);

  if (product) {
    console.table({
      "Product ID": product.id,
      "Product Name": product.name,
      "Product Category": product.category,
      "Product Price": product.price,
      "Product Stock": product.stock,
      "Product Availability": product.availability,
    });
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}

// Filter products by category
export function filterProductsByCategory(
  category,
  productsToFilter = products,
) {
  if (!isValidArray(productsToFilter)) return [];

  if (category === "all") return productsToFilter;

  if (!isValidString(category)) {
    console.log("Please provide a valid category.");
    return [];
  }

  return productsToFilter.filter((product) => {
    return product.category.toLowerCase() === category.trim().toLowerCase();
  });
}

// Sort products by price
export function sortProductsByPrice(order, productsToSort = products) {
  if (!isValidArray(productsToSort)) return [];

  if (!isValidSortOrder(order)) {
    console.log("Invalid order. Please use 'asc' or 'desc'.");
    return [...productsToSort];
  }

  return [...productsToSort].sort((a, b) => {
    return order === "asc" ? a.price - b.price : b.price - a.price;
  });
}
