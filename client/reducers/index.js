import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cart from './cart_reducer';
import products from './products_reducer';


const rootReducer = combineReducers({cart, products, routing: routerReducer});

export default rootReducer;