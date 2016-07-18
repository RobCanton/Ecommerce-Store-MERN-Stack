import React from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar'

const Main = React.createClass({
  
  componentDidMount() {
    this.props.action_loadAllProducts();
    this.props.action_loadCartItems();
  },
  
  render() {
    return (
      <div className="container">
        <div className="starter-template">
          <Link to="/">
            <img src="http://159.203.16.13:4747/images/logo.png" width="100"/>
          </Link>
          <br/><br/>
          <Navbar cart={this.props.cart} pathname={this.props.location.pathname}/>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
})

export default Main;