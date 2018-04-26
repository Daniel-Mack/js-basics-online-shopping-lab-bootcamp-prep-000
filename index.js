var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
  }
  let price = getRandomInt(0, 100)
  let cartItem = {itemName: item, itemPrice: price}
  cart.push(cartItem) 
  return `${item} has been added to your cart.`
} 



function viewCart() {

   for ( let i = 0; i < cart.length; i++) {
     if (i === 0) {
       return  "Your shopping cart is empty."
     } else if (i === 1) {
       return `In your cart, you have ${item} at ${price}.`
     } else if (i === 2) {
       return `In your cart, you have ${item} at ${price}.`
     } else if (i === 3) {
       return `In your cart, you have ${item} at ${price}.`
     }
  }
  getcart()
}
 
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
