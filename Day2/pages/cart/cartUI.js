import { cart } from "../../data/cart.js";

// Render all cart items
export function displayCart() {
  const cartContainer = document.querySelector("#cart-items");
  const cartTotal = document.querySelector("#cart-total");

  if (!cartContainer || !cartTotal) return;

  // Display message when cart is empty
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "Total: ₹0";
    return;
  }

  // Generate cart item cards
  cartContainer.innerHTML = cart
    .map((item) => {
      return `
        <div class="cart-item">

          <div class="cart-item-details">
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price.toLocaleString("en-IN")}</p>
            <p>
              Subtotal:
              ₹${(item.price * item.quantity).toLocaleString("en-IN")}
            </p>
          </div>

          <div class="quantity-controls">

            <button
              data-action="decrease"
              data-product-id="${item.productId}"
            >−</button>

            <span>${item.quantity}</span>

            <button
              data-action="increase"
              data-product-id="${item.productId}"
            >+</button>

          </div>

          <button
            class="remove-item"
            data-action="remove"
            data-product-id="${item.productId}"
          >
            Remove
          </button>

        </div>
      `;
    })
    .join("");

  // Calculate total cart price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartTotal.textContent = `Total: ₹${total.toLocaleString("en-IN")}`;
}
