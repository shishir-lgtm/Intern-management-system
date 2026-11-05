# Day 2 – E-commerce Shopping Cart System

## Overview

A console-based E-commerce Shopping Cart System built using Vanilla JavaScript and Node.js. This project demonstrates product management, shopping cart operations, coupon discounts, shipping calculations, and order summary generation.

## Features

### 1. Product Management

- Display all available products.
- Search products by ID.
- Filter products by category.
- Sort products by price in ascending or descending order.

### 2. Cart Management

- Add products to the shopping cart.
- Remove products from the cart.
- Update product quantities.
- Prevent duplicate cart entries.
- Check product availability and stock.
- Display cart items with individual and total prices.
- Automatically update inventory when cart quantities change.

### 3. Discount and Coupon System

| Coupon Code |           Discount | Minimum Subtotal |
| ----------- | -----------------: | ---------------: |
| SAVE10      |                10% |           ₹1,000 |
| SAVE20      |                20% |           ₹5,000 |
| FLAT500     | ₹500 flat discount |           ₹3,000 |

### 4. Shipping Calculation

- Orders below ₹1,000 have a shipping charge of ₹100.
- Orders of ₹1,000 or above qualify for free shipping.

### 5. Order Summary

- Generate a unique Order ID.
- Display purchased products and quantities.
- Calculate subtotal.
- Apply eligible coupon discounts.
- Calculate shipping charges.
- Display the final payable amount.

### 6. Validation and Error Handling

- Validate product IDs and quantities.
- Validate coupon codes and minimum purchase requirements.
- Validate cart data.
- Prevent invalid quantities and insufficient-stock operations.
- Handle empty carts and invalid inputs.

## Screen Recording and Testing

The following screen recording demonstrates project execution, implemented functionalities, and test cases.

**Google Drive – Project Demonstration and Testing:**

[Watch the Day 2 Screen Recording]
https://drive.google.com/file/d/1s9a5hiPg0CTNYuUklwk_e0MTBbk4yGJf/view?usp=drivesdk

The demonstration covers:

- Product display, search, filtering, and sorting.
- Adding, removing, and updating cart items.
- Cart quantity and inventory updates.
- Coupon validation and discount calculations.
- Shipping calculation.
- Final order summary generation.

## Project Structure

Day2/

- data/
  - products.js
  - cart.js
- utils/
  - validation.js
  - cartValidation.js
- productOperations.js
- cartCrud.js
- discountOperations.js
- orderSummary.js
- script.js
- README.md

## Technologies Used

- JavaScript (ES6+)
- Node.js
- Vanilla JavaScript
- ES Modules

## JavaScript Concepts Practiced

- Variables, data types, arrays, and objects.
- Functions and arrow functions.
- ES6 import and export.
- Spread operator.
- Template literals.
- Array methods: `map()`, `filter()`, `find()`, `some()`, `reduce()`, `forEach()`.
- Array methods: `sort()`, `splice()`.
- Default parameters.
- Conditional statements and loops.
- Sets for duplicate detection.
- Reusable utility and validation functions.

## How to Run

**Prerequisite:** Node.js must be installed.

Navigate to the Day2 directory and run:

`node script.js`

## Learning Objective

The objective of this project is to understand how multiple JavaScript modules work together to build a small application, manage shared data, perform CRUD operations, implement business logic, and handle validations and edge cases.

**Project:** Day 2 – E-commerce Shopping Cart System  
**Challenge:** 30 Days – 30 JavaScript Projects
