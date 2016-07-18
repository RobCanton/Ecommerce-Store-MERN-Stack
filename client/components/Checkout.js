import React from 'react';
import { Link } from 'react-router';

const Checkout = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <Link to="/">
            <img src="http://159.203.16.13:4747/images/logo.png"/>
          </Link>
          <br/><br/>
          Checkout!
        </div>
      </div>
    )
  }
})

export default Checkout;