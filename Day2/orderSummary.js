import { cart } from "./data/cart.js";

import {
  calculateSubtotal,
  applyCoupon,
  calculateShipping,
} from "./discountOperation.js";
// Generate unique order ID
function generateOrderId() {
  return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

// Generate order summary
export function generateOrderSummary(couponCode = "") {
  // Check whether cart exists and contains products
  if (!Array.isArray(cart) || cart.length === 0) {
    console.log("Cannot generate order summary. Your cart is empty.");
    return;
  }

  // Calculate subtotal
  const subtotal = calculateSubtotal(cart);

  if (subtotal === null) {
    console.log("Unable to generate order summary due to invalid cart data.");
    return;
  }

  // Calculate discount
  let discount = 0;

  if (couponCode.trim() !== "") {
    const couponResult = applyCoupon(subtotal, couponCode);

    console.log(couponResult.message);

    if (couponResult.isValid) {
      discount = couponResult.discount;
    }
  }

  // Calculate shipping
  const shipping = calculateShipping(subtotal);

  if (shipping === null) {
    console.log("Unable to calculate shipping.");
    return;
  }

  // Calculate final payable amount
  const finalAmount = subtotal - discount + shipping;

  // Generate order ID
  const orderId = generateOrderId();

  // Display purchased products
  console.log("\n========== ORDER SUMMARY ==========");
  console.log(`Order ID: ${orderId}`);

  console.table(
    cart.map((item) => ({
      "Product ID": item.productId,
      "Product Name": item.name,
      "Unit Price": item.price,
      Quantity: item.quantity,
      "Total Price": item.price * item.quantity,
    })),
  );

  console.log("Subtotal:", subtotal);
  console.log("Discount:", discount);
  console.log("Shipping:", shipping);
  console.log("Final Payable Amount:", finalAmount);
  console.log("===================================");
}
