export function action_loadAllProducts() {
  return {
    type: 'LOAD_ALL_PRODUCTS_REQUESTED'
  }
}

export function action_loadCartItems() {
  return {
    type: 'LOAD_CART_ITEMS_REQUESTED'
  }
}

// Add Cart Item
export function action_addCartItem(item) {
  return {
    type: 'ADD_CART_ITEM_REQUESTED',
    item
  }
}

// Add Cart Item
export function action_removeCartItem(sku) {
  return {
    type: 'REMOVE_CART_ITEM_REQUESTED',
    sku
  }
}

export function action_incrementCartItem(sku) {
  return {
    type: 'INCREMENT_CART_ITEM_REQUESTED',
    sku
  }
}

export function action_decrementCartItem(sku) {
  return {
    type: 'DECREMENT_CART_ITEM_REQUESTED',
    sku
  }
}
