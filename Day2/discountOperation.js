import {
  isValidArray,
  isValidString,
  isValidPrice,
  isValidQuantity,
} from "./utils/valiadtion.js";
// Available coupons
const coupons = {
  SAVE10: {
    type: "percentage",
    value: 10,
    minimumSubtotal: 1000,
  },
  SAVE20: {
    type: "percentage",
    value: 20,
    minimumSubtotal: 5000,
  },
  FLAT500: {
    type: "flat",
    value: 500,
    minimumSubtotal: 3000,
  },
};

// Calculate cart subtotal
export function calculateSubtotal(cart) {
  if (!isValidArray(cart)) {
    console.log("Invalid cart. Expected an array.");
    return null;
  }

  let isCartValid = true;

  cart.forEach((item) => {
    if (!item || !isValidPrice(item.price) || !isValidQuantity(item.quantity)) {
      isCartValid = false;
    }
  });

  if (!isCartValid) {
    console.log("Cart contains invalid product prices or quantities.");
    return null;
  }

  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

// Apply coupon and calculate discount
export function applyCoupon(subtotal, couponCode) {
  if (
    typeof subtotal !== "number" ||
    !Number.isFinite(subtotal) ||
    subtotal < 0
  ) {
    return {
      isValid: false,
      discount: 0,
      message: "Invalid subtotal.",
    };
  }

  if (!isValidString(couponCode)) {
    return {
      isValid: false,
      discount: 0,
      message: "Please enter a valid coupon code.",
    };
  }

  const normalizedCode = couponCode.trim().toUpperCase();
  const coupon = coupons[normalizedCode];

  if (!coupon) {
    return {
      isValid: false,
      discount: 0,
      message: "Invalid coupon code.",
    };
  }

  if (subtotal < coupon.minimumSubtotal) {
    return {
      isValid: false,
      discount: 0,
      message: `${normalizedCode} requires a minimum purchase of ₹${coupon.minimumSubtotal}.`,
    };
  }

  let discount = 0;

  if (coupon.type === "percentage") {
    discount = (subtotal * coupon.value) / 100;
  } else if (coupon.type === "flat") {
    discount = coupon.value;
  }

  return {
    isValid: true,
    couponCode: normalizedCode,
    discount,
    message: `${normalizedCode} applied successfully. You saved ₹${discount}.`,
  };
}

// Calculate shipping charges
export function calculateShipping(subtotal) {
  if (
    typeof subtotal !== "number" ||
    !Number.isFinite(subtotal) ||
    subtotal < 0
  ) {
    console.log("Invalid subtotal.");
    return null;
  }

  if (subtotal === 0 || subtotal >= 1000) {
    return 0;
  }

  return 100;
}
