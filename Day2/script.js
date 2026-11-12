import {
  displayProducts,
  searchProducts,
  filterProductsByCategory,
  sortProductsByPrice,
} from "./pages/products/productOperation.js";

import { addToCart } from "./pages/cart/cartOperation.js";
import { products } from "./data/products.js";
import { cart } from "./data/cart.js";
import { loadCart, saveCart } from "./utils/cartStorage.js";

const viewCartButton = document.querySelector("#view-cart");
const productsContainer = document.querySelector("#products-container");

const searchInput = document.querySelector("#product-search");
const categoryFilter = document.querySelector("#category-filter");
const priceSort = document.querySelector("#price-sort");

function updateCartCount() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  viewCartButton.textContent = `Cart (${totalQuantity})`;
}

function renderProducts() {
  let filteredProducts = searchProducts(searchInput.value, products);

  filteredProducts = filterProductsByCategory(
    categoryFilter.value,
    filteredProducts,
  );

  if (priceSort.value !== "none") {
    filteredProducts = sortProductsByPrice(priceSort.value, filteredProducts);
  }

  displayProducts(filteredProducts);
}

// Re-read the cart from storage and refresh the page
function syncFromStorage() {
  loadCart();
  renderProducts();
  updateCartCount();
}

searchInput.addEventListener("input", renderProducts);

categoryFilter.addEventListener("change", renderProducts);

priceSort.addEventListener("change", renderProducts);

productsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button.add-to-cart");

  if (!button) return;

  addToCart(Number(button.dataset.productId), 1);

  saveCart();
  renderProducts();
  updateCartCount();
});

syncFromStorage();

// Handle browser back/forward cache
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    syncFromStorage();
  }
});

// Handle cart changes from another tab
window.addEventListener("storage", (event) => {
  if (event.key === "cart") {
    syncFromStorage();
  }
});
