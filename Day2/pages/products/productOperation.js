import { productCard } from "./productCard.js";
import { products } from "../../data/products.js";
import {
  isValidProductId,
  isValidString,
  isValidArray,
  isValidSortOrder,
} from "../../utils/validations/valiadtion.js";
// Display all produexport cts

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

  productsContainer.innerHTML = productsToDisplay
    .map((product) => {
      const isOutOfStock = product.stock <= 0 || !product.availability;
      return productCard(product, isOutOfStock);
    })
    .join("");
}

// Search product byexport  ID
export function searchProductById(id) {
  if (!isValidProductId(id)) {
    console.log("Please provide a valid product ID.");
    return;
  }

  const product = products.find((product) => {
    return product.id === id;
  });

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
export function filterProductsByCategory(category) {
  if (!isValidString(category)) {
    console.log("Please provide a valid category.");
    return;
  }

  const filteredProducts = products.filter((product) => {
    return product.category.toLowerCase() === category.trim().toLowerCase();
  });

  if (filteredProducts.length > 0) {
    console.table(
      filteredProducts.map((product) => ({
        "Product ID": product.id,
        "Product Name": product.name,
        "Product Category": product.category,
        "Product Price": product.price,
        "Product Stock": product.stock,
        "Product Availability": product.availability,
      })),
    );
  } else {
    console.log(`No products found in category: ${category}`);
  }
}

// Sort products by price
export function sortProductsByPrice(order) {
  if (!isValidSortOrder(order)) {
    console.log("Invalid order. Please use 'asc' or 'desc'.");
    return;
  }

  if (order === "asc") {
    const shorted = [...products].sort((a, b) => a.price - b.price);
    displayProducts(shorted);
  } else if (order === "desc") {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    displayProducts(sorted);
  }
}
displayProducts();
filterProductsByCategory("Electronics");
sortProductsByPrice("asc");
