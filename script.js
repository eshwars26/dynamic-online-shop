const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image: "d:\Eshwar\online-shopping\t-shirt.jpg"
  },
  {
    id: 2,
    name: "Shoes",
    price: 1299,
    image: "d:\Eshwar\online-shopping\shoes.jpg"
  },
  {
    id: 3,
    name: "Watch",
    price: 1999,
    image: "d:\Eshwar\online-shopping\watch.jpg"
  },
  {
    id: 4,
    name: "Backpack",
    price: 799,
    image: "d:\Eshwar\online-shopping\backpack.jpg"
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
    li.textContent = `${item.name} - ₹${item.price}`;
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
