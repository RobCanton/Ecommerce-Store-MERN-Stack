import React from 'react';
import { Link } from 'react-router';

const ProductSingle = React.createClass({
    render() {
    return(
      <div className="col-md-3 col-sm-6 hero-feature">
        <div className="hovereffect">
          <Link to={`/product/${this.props.sku}`}>
            <img className="img-responsive" src={this.props.imgUrl} alt=""></img>
          </Link>
        </div>
        <h4>
          {this.props.name}
        </h4>
        <h3>
          ${this.props.price}
        </h3>
      </div>
    );
  }
});

const ProductGrid = React.createClass({
  _getProducts() {
    const productList = this.props.products;

    return productList.map((product) => {
      return (<ProductSingle
               sku={product.sku}
               name={product.name}
               price={product.price}
               key={product.sku}
               imgUrl={'http://159.203.16.13:4747/images/' + product.sku + '.png'}
             />);
    });
  },
  render() {
    const products = this._getProducts();
    return (
      <div className="row text-center">
          {products}
      </div>
    )
  }
});

export default ProductGrid;
