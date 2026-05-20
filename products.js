const products = [
  { name: "Royal Vanilla", price: 399, image: "https://images.unsplash.com/photo-1608181831718-7b3e6b9d4e8a" },
  { name: "French Lavender", price: 399, image: "https://images.unsplash.com/photo-1590080877777-95b7f6c3c7e5" },
  { name: "Golden Sandal", price: 399, image: "https://images.unsplash.com/photo-1602526216435-5b0c9c0a9b1c" }
];

const list = document.getElementById("product-list");

products.forEach(p => {
  list.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
    </div>
  `;
});
