import React from 'react';
import { Link } from 'react-router';
import store from '../store';

const Navbar = React.createClass({

  
  _getQuantity() {
    var q = 0;
    console.log(this.props.cart);
    for(var item of this.props.cart) {
      q += item.quantity;
    }
    return q;
  },
  
  _handleNavChange() {
    
  },
  
  
  render() {
    const q = this._getQuantity();
    const path = this.props.pathname;
    console.log("PATH: " + path);
    if (path === '/cart') {
      console.log("its a cart ting");
    }
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className={path === '/' ? 'active' : null}><Link to="/">Shop</Link></li>
            <li className={path === '/cart' ? 'active' : null}><Link to="/cart">Cart ({q})</Link></li>
            <li className={path === '/login' ? 'active' : null}><Link to="/login">Account</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
})

export default Navbar;