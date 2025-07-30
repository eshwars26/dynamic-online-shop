const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image: "https://via.placeholder.com/200x150.png?text=T-Shirt"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1299,
    image: "https://via.placeholder.com/200x150.png?text=Shoes"
  },
  {
    id: 3,
    name: "Watch",
    price: 1999,
    image: "https://via.placeholder.com/200x150.png?text=Watch"
  },
  {
    id: 4,
    name: "Backpack",
    price: 799,
    image: "https://via.placeholder.com/200x150.png?text=Backpack"
  }
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("productContainer");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const totalPrice = document.getElementById("totalPrice");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = ${item.name} - ₹${item.price};
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  totalPrice.textContent = total;
}

function toggleCart() {
  const cartSection = document.getElementById("cartContainer");
  cartSection.classList.toggle("hidden");
}

renderProducts();