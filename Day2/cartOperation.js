import { products } from "./data/products.js";
import { cart } from "./data/cart.js";

import { isValidQuantity, isValidProductId } from "./utils/valiadtion.js";
import { validateCart } from "./utils/cartValiadtion.js";
// Common cart validation utility
function checkCartValidity() {
  const result = validateCart(cart, products);

  if (!result.isValid) {
    result.errors.forEach((error) => console.log(error));
    return false;
  }

  return true;
}

// Add to cart
export function addToCart(productId, quantity) {
  if (!isValidProductId(productId) || !isValidQuantity(quantity)) {
    console.log("Invalid product ID or quantity.");
    return;
  }

  if (!checkCartValidity()) return;

  const product = products.find((product) => product.id === productId);

  if (!product) {
    console.log(`Product with ID ${productId} not found.`);
    return;
  }

  if (product.stock < quantity) {
    console.log(
      `Insufficient stock for ${product.name}. Available stock: ${product.stock}`,
    );
    return;
  }

  const existingProduct = cart.find((item) => item.productId === productId);

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
    });
  }

  product.stock -= quantity;

  console.log(`Added ${quantity} of ${product.name} to cart.`);
}

// Remove from cart
export function removeFromCart(productId, quantity) {
  if (!isValidProductId(productId) || !isValidQuantity(quantity)) {
    console.log("Invalid product ID or quantity.");
    return;
  }

  if (!checkCartValidity()) return;

  const existingProduct = cart.find((item) => item.productId === productId);

  if (!existingProduct) {
    console.log(`Product with ID ${productId} not found in cart.`);
    return;
  }

  if (existingProduct.quantity < quantity) {
    console.log(
      `Cannot remove ${quantity}. Only ${existingProduct.quantity} available in cart.`,
    );
    return;
  }

  const product = products.find((item) => item.id === productId);

  existingProduct.quantity -= quantity;
  product.stock += quantity;

  if (existingProduct.quantity === 0) {
    const index = cart.indexOf(existingProduct);
    cart.splice(index, 1);
  }

  console.log(`Removed ${quantity} of ${product.name} from cart.`);
}

// Update cart quantity
export function updateCart(productId, quantity) {
  if (!isValidProductId(productId)) {
    console.log("Invalid product ID.");
    return;
  }

  // Zero is allowed because it removes the product.
  if (!Number.isInteger(quantity) || quantity < 0) {
    console.log("Quantity must be a non-negative integer.");
    return;
  }

  if (!checkCartValidity()) return;

  const existingProduct = cart.find((item) => item.productId === productId);

  if (!existingProduct) {
    console.log(`Product with ID ${productId} not found in cart.`);
    return;
  }

  const product = products.find((item) => item.id === productId);

  const quantityDifference = quantity - existingProduct.quantity;

  if (quantityDifference > 0 && product.stock < quantityDifference) {
    console.log(
      `Insufficient stock for ${product.name}. Available stock: ${product.stock}`,
    );
    return;
  }

  existingProduct.quantity = quantity;
  product.stock -= quantityDifference;

  if (quantity === 0) {
    const index = cart.indexOf(existingProduct);
    cart.splice(index, 1);
  }

  console.log(`Updated ${product.name} quantity to ${quantity}.`);
}

// View cart
export function viewCart() {
  if (!checkCartValidity()) return;

  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  console.table(
    cart.map((item) => ({
      "Product ID": item.productId,
      "Product Name": item.name,
      "Product Price": item.price,
      Quantity: item.quantity,
      "Total Price": item.price * item.quantity,
    })),
  );
}
