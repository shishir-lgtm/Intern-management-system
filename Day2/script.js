import { displayProducts } from "./pages/products/productOperation.js";
import { addToCart } from "./pages/cart/cartOperation.js";
import { cart } from "./data/cart.js";
import { loadCart, saveCart } from "./utils/cartStorage.js";

const viewCartButton = document.querySelector("#view-cart");
const productsContainer = document.querySelector("#products-container");

function updateCartCount() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  viewCartButton.textContent = `Cart (${totalQuantity})`;
}

// Re-read the cart from storage and redraw everything
function syncFromStorage() {
  loadCart();
  displayProducts();
  updateCartCount();
}

// // Open cart on a new page
// viewCartButton.addEventListener("click", () => {
//   window.location.href = "cart.html";
// });

// Add to cart
productsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button.add-to-cart");
  if (!button) return;

  addToCart(Number(button.dataset.productId), 1);
  saveCart();
  displayProducts();
  updateCartCount();
});

// Initial load
syncFromStorage();

// Page restored from the back/forward cache (Back button)
window.addEventListener("pageshow", (event) => {
  if (event.persisted) syncFromStorage();
});

// Cart changed in another tab
window.addEventListener("storage", (event) => {
  if (event.key === "cart") syncFromStorage();
});
