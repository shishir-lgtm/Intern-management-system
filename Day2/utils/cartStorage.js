import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

const STORAGE_KEY = "cart";

// Remember the original stock once, when this module first loads
const originalStock = new Map(products.map((p) => [p.id, p.stock]));

// Save the cart after every change
export function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Safe to call any number of times
export function loadCart() {
  // 1. Reset stock to its original values
  products.forEach((product) => {
    product.stock = originalStock.get(product.id);
  });

  // 2. Restore the cart from storage (keep the same array reference)
  cart.length = 0;

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (Array.isArray(saved)) cart.push(...saved);
  } catch {
    // corrupted data, start with an empty cart
  }

  // 3. Items in the cart are no longer available in stock
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) product.stock = Math.max(0, product.stock - item.quantity);
  });
}
