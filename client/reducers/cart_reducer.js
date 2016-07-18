// REDUCERS
function cart(state = [], action) {
  switch(action.type) {
    case "LOAD_CART_ITEMS_SUCCEEDED":
      return action.items;
    case "ADD_CART_ITEM_SUCCEEDED":
      return action.items;
    case "REMOVE_CART_ITEM_SUCCEEDED":
      return action.items;
    case "INCREMENT_CART_ITEM_SUCCEEDED":
      return [
        ...state.slice(0, action.index),
        {...state[action.index], quantity: state[action.index].quantity++ },
        ...state.slice(action.index + 1) 
      ]
    case "DECREMENT_CART_ITEM_SUCCEEDED":
      return [
        ...state.slice(0, action.index),
        {...state[action.index], quantity: state[action.index].quantity-- },
        ...state.slice(action.index + 1) 
      ]
    default:
      return state;
  }
  return state;
}


export default cart;