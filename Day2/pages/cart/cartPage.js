import { addToCart, removeFromCart } from "./cartOperation.js";
import { cart } from "../../data/cart.js";
import { displayCart } from "./cartUI.js";
import { loadCart, saveCart } from "../../utils/cartStorage.js";

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action][data-product-id]");

  if (!button) return;

  const productId = Number(button.dataset.productId);
  const item = cart.find((i) => i.productId === productId);
  if (!item) return;

  const messageElement = document.querySelector("#cart-message");
  let result;

  switch (button.dataset.action) {
    case "increase":
      result = addToCart(productId, 1);
      break;

    case "decrease":
      if (item.quantity <= 1) {
        messageElement.textContent =
          "Minimum quantity is 1. Use Remove to delete the product.";
        return;
      }

      result = removeFromCart(productId, 1);
      break;

    case "remove":
      result = removeFromCart(productId, item.quantity);
      break;

    default:
      return;
  }

  if (!result.success) {
    messageElement.textContent = result.message;
    return;
  }

  messageElement.textContent = "";

  saveCart();
  displayCart();
});

loadCart();
displayCart();

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    loadCart();
    displayCart();
  }
});
