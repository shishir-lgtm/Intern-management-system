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

  switch (button.dataset.action) {
    case "increase":
      addToCart(productId, 1);
      break;
    case "decrease":
      removeFromCart(productId, 1);
      break;
    case "remove":
      removeFromCart(productId, item.quantity);
      break;
    default:
      return;
  }

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
