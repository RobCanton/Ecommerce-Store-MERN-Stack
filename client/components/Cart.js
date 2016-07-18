import React from 'react';
import { Link } from 'react-router';

const CartItem = React.createClass({
  
  _handleRemoveCartItem() {
    this.props.action_removeCartItem(this.props.product.sku);
  },
  _handleIncrementCartItem() {
    this.props.action_incrementCartItem(this.props.product.sku);
  },
  _handleDecrementCartItem() {
    this.props.action_decrementCartItem(this.props.product.sku);
  },
  render() {
    return (
      <tr>
        <td className="col-sm-2 col-md-1 vert-align">
          <div className="media">
            <Link className="pull-left" to={`/product/${this.props.product.sku}`}> <img className="cartItem_img" src={"http://159.203.16.13:4747/images/" + this.props.product.sku + ".png" }/> </Link>
          </div>
        </td>
        <td className="col-sm-4 col-md-3 vert-align">
          <div className="media">
            <div className="media-body text-left">
              <h4 className="media-heading"><Link to={`/product/${this.props.product.sku}`}>{this.props.product.name}</Link></h4>
              <span>Size: {this.props.size}</span><br/>
              <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
            </div>
          </div>
        </td>
        <td className="col-sm-2 col-md-2 vert-align">
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this._handleDecrementCartItem}><span className="glyphicon glyphicon-minus"></span></button>
            </span>
            <div className="form-control text-center">{this.props.quantity}</div>
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this._handleIncrementCartItem}><span className="glyphicon glyphicon-plus"></span></button>
            </span>
          </div>
        </td>
        <td className="col-sm-2 col-md-2 text-center vert-align">
          <h4>${this.props.product.price * this.props.quantity}</h4>
        </td>
        <td className="col-sm-1 col-md-1 vert-align">
          <button type="button" className="btn btn-danger btn-sm" onClick={this._handleRemoveCartItem}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </td>
      </tr>
    )
  }
});

const Cart = React.createClass({
  
  getInitialState() {
    return {
      cart: []
    }
  },
  
  _populateCart() {
    const cart = this.props.cart || [];
    var populatedCart = [];
    for (var item of cart) {
      for (var product of this.props.products) {
        if (product.sku === item.sku) {
          var cartItem = {
            product: product,
            size: item.size,
            quantity: item.quantity
          }
          populatedCart.push(cartItem);
        }

      }
    }
    return populatedCart;
  },
 
  _getItems(cart) {
    return cart.map((item) => {
      return (
            <CartItem
                key={item.product.sku}
                size={item.size}
                quantity={item.quantity}
                product={item.product}
                action_removeCartItem={this.props.action_removeCartItem}
                action_incrementCartItem={this.props.action_incrementCartItem}
                action_decrementCartItem={this.props.action_decrementCartItem}
             />);

    });
  },
  _calculateSubtotal(cart) {
    var subtotal = 0;
    for (var item of cart) {
      subtotal += item.quantity * item.product.price;
    }
    return subtotal;
  },
  _getEmptyMsg() {
    return(
      <div>
      <h4>Nothing here!</h4>
        <Link to="/"><h4>Go grab some tings.</h4></Link>
      </div>
    )
  },
  _getHeader(populatedCart) {
    return(
      <div>
      <div className="col-sm-4 col-md-4">
                <Link to="/">
                  <h4>
                    &#8249; Add more stuff
                  </h4>
                </Link>
              </div>
              <div className="col-sm-4 col-md-4">
                <h4>
                  Subtotal: $ {this._calculateSubtotal(populatedCart)}
                </h4>
              </div>
              <div className="col-sm-4 col-md-4">
                <a>
                  <h4>
                    Checkout &#8250;
                  </h4>
                </a>
              </div>
        </div>
    )
  },
  render() {
    console.log("Rendering Cart");
    const populatedCart = this._populateCart();
    const items = this._getItems(populatedCart);
    var header = null;
    if (!populatedCart.length) {
      header = this._getEmptyMsg();
    } else {
      header = this._getHeader(populatedCart);
    }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">

            <div className="row">
              {header}
              <table className="table">
                <tbody>
                  {items}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
        
      </div>
      

    )
  }
});

export default Cart;

