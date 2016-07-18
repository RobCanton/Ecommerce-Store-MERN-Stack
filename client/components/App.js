import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


const App = connect(mapStateToProps, mapDispatchProps)(Main);

export default App;