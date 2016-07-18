// REDUCERS
function products(state = [], action) {
  switch(action.type) {
    case "LOAD_ALL_PRODUCTS_SUCCEEDED":
      return action.products
    default:
      return state;
  }
  return state;
}


export default products;