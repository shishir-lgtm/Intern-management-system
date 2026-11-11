import { addToCart, removeFromCart } from "./cartOperation.js";

import { cart } from "./data/cart.js";
import { displayProducts } from "./productOperation.js";
import { displayCart } from "./cartUI.js";

// Select UI elements
const productsContainer = document.querySelector("#products-container");
const cartSection = document.querySelector("#cart-section");
const viewCartButton = document.querySelector("#view-cart");
const closeCartButton = document.querySelector("#close-cart");

// Update cart quantity in the header
function updateCartCount() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  viewCartButton.textContent = `Cart (${totalQuantity})`;
}

// // Refresh all relevant UI sections
// function refreshUI() {
//   displayProducts();
//   displayCart();
//   updateCartCount();
// }

// // Handle all button clicks from the document
// export function initializeUIEvents() {
//   document.addEventListener("click", (event) => {
//     // Identify the clicked action button
//     const button = event.target.closest("[data-action]");

//     // Handle Add to Cart buttons
//     if (button?.dataset.action === "add") {
//       const productId = Number(button.dataset.productId);

//       addToCart(productId, 1);
//       refreshUI();
//       return;
//     }

//     // Handle cart item operations
//     if (button?.dataset.productId) {
//       const productId = Number(button.dataset.productId);

//       const existingProduct = cart.find((item) => item.productId === productId);

//       if (!existingProduct) return;

//       switch (button.dataset.action) {
//         case "increase":
//           // Add one more unit to the cart
//           addToCart(productId, 1);
//           break;

//         case "decrease":
//           // Remove one unit and restore its stock
//           removeFromCart(productId, 1);
//           break;

//         case "remove":
//           // Remove the complete product quantity
//           removeFromCart(productId, existingProduct.quantity);
//           break;

//         default:
//           return;
//       }

//       refreshUI();
//       return;
//     }

//     // Open cart
//     if (event.target.closest("#view-cart")) {
//       cartSection.hidden = false;
//       displayCart();
//       return;
//     }

//     // Close cart
//     if (event.target.closest("#close-cart")) {
//       cartSection.hidden = true;
//     }
//   });

//   // Initial cart count
//   updateCartCount();
// }
