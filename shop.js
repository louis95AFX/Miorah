let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
    const card = e.target.closest('.product-card');
    const id = card.getAttribute('data-id');
    const name = card.querySelector('h3').textContent;
    const price = parseFloat(card.querySelector('.price').textContent.replace('R', ''));
    const img = card.getAttribute('data-img');

    addToCart(id, name, price, img);
  });
});

function addToCart(id, name, price, img) {
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ id, name, price, qty: 1, img });
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    cartTotalElement.textContent = 'R0';
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <div class="cart-item-info">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>Qty: ${item.qty} × R${item.price}</p>
        </div>
      </div>
      <span><strong>R${itemTotal.toFixed(2)}</strong></span>
      <button class="remove-btn" title="Remove">✖</button>
    `;

    div.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(item.id));

    cartItemsContainer.appendChild(div);
  });

  cartTotalElement.textContent = `R${total.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  alert('Thank you for your purchase! 🛍');
  cart = [];
  saveCart();
  renderCart();
});

renderCart();
