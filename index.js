var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var food = {itemName: item, itemPrice: Math.floor(100*Math.random())}
 cart.push(food)
 return `${food.itemName} has been added to your cart.`
}

function viewCart() {
  var cartSentence = [];
  if (cart.length === 0) {
    return ("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    cartSentence.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`);
  }
  else {
    for (let i = 0; i < cart.length-1; i++) {
      cartSentence.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
      cartSentence.push(` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`);
    }
  return (`In your cart, you have${cartSentence}.`);
}

function total() {
var cartTotal = 0;
 for (let i = 0; i < getCart().length; i++) {
  cartTotal += getCart()[i].itemPrice;
} return cartTotal
}

function removeFromCart(item) {
 for (let i = 0; i <getCart().length; i++){
   if (getCart.indexOf == -1){
     return `That item is not in your cart.`
 }
 // else (getCart().splice(, 1)
 //  return cart;
}
 }


// function placeOrder(cardNumber) {
//   // write your code here
// }
