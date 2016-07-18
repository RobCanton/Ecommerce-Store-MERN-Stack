import React from 'react';
import { Link } from 'react-router';

const Login = React.createClass({
 
  render() {

    return (
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-3 col-sm-6 text-center">
          <form className="form-horizontal" name="loginForm" role="form" noValidate>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-1">
                <h2>Login</h2>
                <h5>Email</h5>
                <input type="email" name="loginEmail" required className="form-control" required/>
              </div>
              <div className="col-sm-10 col-sm-offset-1">
                <h5>Password</h5>
                <input type="password" name="loginPass" className="form-control" required/>
              </div>
            </div>
            <div className="alert alert-danger col-sm-10 col-sm-offset-1">
              <strong>Oops!</strong>
            </div>
            <div className="form-group">
              <div className=" col-sm-10 col-sm-offset-1">
                <button type="submit" className="btn btn-default">Login</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-3 col-sm-6 column-right text-center">
          <form className="form-horizontal" role="form" name="regForm" noValidate>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-1">
                <h2>Sign Up</h2>
                <h5>First Name</h5>
                <input type="text" name="regFirst" className="form-control" required/>
              </div>

              <div className="col-sm-10 col-sm-offset-1">
                <h5>Last Name</h5>
                <input type="text" name="regLast" className="form-control" required/>
              </div>

              <div className="col-sm-10 col-sm-offset-1" >
                <h5>Email</h5>
                <input type="email" name="regEmail" className="form-control" required/>
              </div>

              <div className="col-sm-10 col-sm-offset-1">
                <h5>Password</h5>
                <input type="password" name="regPass" className="form-control"/>
              </div>
            </div>
            <div className="alert alert-danger col-sm-10 col-sm-offset-1" required>
              <strong>Oops!</strong>
            </div>
            <div className="form-group">
              <div className=" col-sm-10 col-sm-offset-1">
                <button type="submit" className="btn btn-default">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-3">
        </div>
      </div>
    )
  }
});

export default Login;

