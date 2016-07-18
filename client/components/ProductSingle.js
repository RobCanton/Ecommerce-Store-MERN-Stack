import React from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

const ProductSingle = React.createClass({
  
    getInitialState: function() {
    return {
      product: {
        sku: '',
        name: '',
        desc: '',
        price: 0
      }
    };
  },
  
  componentDidMount() {
    const { sku } = this.props.params;

    for (var _product of this.props.products) {
      if (_product.sku === sku) {
        this.setState({
          product: _product
        })
      }
    }
  },
  
  _addToCart() {
    var item = {
      sku: this.state.product.sku,
      size: "md",
      quantity: 1
    }
    this.props.action_addCartItem(item);
    this.props.history.push('/cart');
  },
  
  render() {
    

    return (
      <div className="row text-center">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <img className="img-responsive" src={"http://159.203.16.13:4747/images/" + this.state.product.sku + ".png"} alt=""/>
        </div>
        <div className="col-md-4">
          <h2>{this.state.product.name}</h2>
          <h2>${this.state.product.price}</h2>
          <br/><br/>
          <div className="row">
            <button type="button" className="btn btn-default btn-lg" onClick={this._addToCart}>ADD TO CART</button>
          </div>
        </div>
        <div className="col-md-2"></div>
    </div>
    )
  }
})

export default ProductSingle;

