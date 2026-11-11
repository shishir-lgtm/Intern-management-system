export function productCard(product, isOutOfStock) {
  return `
        <div class="product-card">
          <h3>${product.name}</h3>

          <p>Product ID: ${product.id}</p>
          <p>Category: ${product.category}</p>
          <p>Price: ₹${product.price.toLocaleString("en-IN")}</p>
          <p>Available Stock: ${product.stock}</p>

          <p>${isOutOfStock ? "Out of Stock" : "In Stock"}</p>

          <button
            class="add-to-cart"
            data-product-id="${product.id}"
            ${isOutOfStock ? "disabled" : ""}
          >
            Add to Cart
          </button>
        </div>
      `;
}
