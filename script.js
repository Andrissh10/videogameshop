let cart = [];
let totalPrice = 0;

function addToCart(gameName, price) {
  cart.push({ name: gameName, price: price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `<li>${item.name} - ${item.price} Ft 
      <button onclick="removeFromCart(${index})">Eltávolítás</button></li>`;
  });
  
  totalPriceElement.textContent = `Teljes ár: ${totalPrice} Ft`;
}

function removeFromCart(index) {
  totalPrice -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("A kosár üres!");
    return;
  }
  alert("Sikeres vásárlás! Köszönjük.");
  cart = [];
  totalPrice = 0;
  updateCart();
}