let cart = [];

function addToCart(name, price){
  cart.push({name, price});
  updateCart();
}

function updateCart(){
  document.getElementById("count").innerText = cart.length;

  let items = "";
  let total = 0;

  cart.forEach((item, index)=>{
    total += item.price;
    items += `<p>${item.name} - ₹${item.price}
      <button onclick="removeItem(${index})">X</button></p>`;
  });

  document.getElementById("cartItems").innerHTML = items;
  document.getElementById("total").innerText = total;
}

function removeItem(i){
  cart.splice(i,1);
  updateCart();
}

function openCart(){
  let box = document.getElementById("cartBox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function checkout(){
  let msg = "Hello, I want to order:\n";
  cart.forEach(i => msg += `${i.name} - ₹${i.price}\n`);
  window.open(`https://wa.me/919354043042?text=${encodeURIComponent(msg)}`);
}
