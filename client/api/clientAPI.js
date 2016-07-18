import store from '../store';

var cart_key = "dtx_items";

function saveCart(cart) {
  if (localStorage != null && JSON != null) {
    localStorage[cart_key] = JSON.stringify(cart);
  }
}


export function loadCartItems() {
  return new Promise(function(resolve, reject) {
    var items = [];
    var storedItems = localStorage != null ? localStorage[cart_key] : null;
    if (storedItems != null && JSON != null) {
      try {

        var _items = JSON.parse(storedItems);
        console.log("_items: " + _items[0]);
        for (var i = 0; i < _items.length; i++) {
          var item = _items[i];
          if (item.sku != null && item.size != null && item.quantity != null) {
            item = {
              sku: item.sku,
              size: item.size,
              quantity: item.quantity
            };
            items.push(item);
          }
        }
        resolve(items);
      } catch (err) {
        // ignore errors while loading...
        reject(err);
      }
    }
  }).then(response => response);
};

export function addCartItem(item) {
  return new Promise(function(resolve, reject) {
    var cart = store.getState().cart;
    var found = false;
    for (var i = 0; i < cart.length; i++) {
      if (item.sku === cart[i].sku) {
        cart[i].quantity += item.quantity // update item
        found = true;        
      }
    }
    if (!found) {
      cart.push(item);
    }
    if (localStorage != null && JSON != null) {
      localStorage[cart_key] = JSON.stringify(cart);
    }
    resolve(cart);
    
  }).then(response => response);
};

function findCartItemIndex(cart, sku) {
  for (var i = 0; i < cart.length; i++) {
    if (sku === cart[i].sku) {
      return i;
    } 
  }
  return -1;
}


export function removeCartItem(sku) {
  return new Promise(function(resolve, reject) {
    
    var cart = store.getState().cart;
    
    var index = findCartItemIndex(cart, sku);
    if (index != -1) {
      var newCart = [
        ...cart.slice(0, index),
        ...cart.slice(index + 1)
        ]; 
      saveCart(newCart);
      resolve(newCart);
    }
    reject(cart);
  }).then(response => response);
};

export function incrementCartItem(sku){
  return new Promise(function(resolve, reject) {
    var cart = store.getState().cart;
    var index = findCartItemIndex(cart, sku);
    if (index != -1) {
      cart[index].quantity += 1;
      saveCart(cart);
      resolve(index);
    }
    reject(cart);
    
  }).then(response => response);
}

export function decrementCartItem(sku){
  return new Promise(function(resolve, reject) {
    var cart = store.getState().cart;
    var index = findCartItemIndex(cart, sku);
    if (index != -1 && cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      saveCart(cart);
      resolve(index);
    }
    reject(cart);
    
  }).then(response => response);
}

export function loadAllProducts() {
    return fetch(`https://deadting.com/api/products`)
    .then(function(response) {
		   return response.json();
	})
}
