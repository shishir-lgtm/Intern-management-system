import {
  isValidProductId,
  isValidArray,
  isValidPrice,
  isValidQuantity,
} from "./valiadtion.js";
export function validateCart(cart, products) {
  const errors = [];

  // Validate cart and products arrays
  if (!isValidArray(cart)) {
    return {
      isValid: false,
      errors: ["Cart must be an array."],
    };
  }

  if (!isValidArray(products)) {
    return {
      isValid: false,
      errors: ["Products must be an array."],
    };
  }

  // Check for duplicate products in cart
  const productIds = cart.map((item) => item.productId);
  const hasDuplicates = new Set(productIds).size !== productIds.length;

  if (hasDuplicates) {
    errors.push("Cart contains duplicate products.");
  }

  // Validate each cart item
  cart.forEach((item, index) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      errors.push(`Invalid cart item at position ${index + 1}.`);
      return;
    }

    if (!isValidProductId(item.productId)) {
      errors.push(`Invalid product ID at position ${index + 1}.`);
    }

    if (!isValidQuantity(item.quantity)) {
      errors.push(`Invalid quantity for product ID ${item.productId}.`);
    }

    if (!isValidPrice(item.price)) {
      errors.push(`Invalid price for product ID ${item.productId}.`);
    }

    // Check whether product exists in inventory
    const productExists = products.some(
      (product) => product.id === item.productId,
    );

    if (!productExists) {
      errors.push(`Product ID ${item.productId} does not exist in inventory.`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
  };
}
