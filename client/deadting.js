// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from '../public/styles/style.css';

// Import Components
import App from './components/App';
import ProductSingle from './components/ProductSingle';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Login from './components/Login';
import Account from './components/Account';
import Checkout from './components/Checkout';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
           <IndexRoute component={ProductGrid}></IndexRoute>
           <Route path="/product/:sku" component={ProductSingle}></Route>
           <Route path="/cart" component={Cart}></Route>
           <Route path="/login" component={Login}></Route>
           <Route path="/account" component={Account}></Route>
      </Route>
      <Route path="/checkout" component={Checkout}>

      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));