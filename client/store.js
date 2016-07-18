import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';


// import the root reducer
import rootReducer from './reducers/index';
import rootSaga from './sagas/sagas';
// 
const defaultState = {
  cart : [],
  products: []
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer, defaultState, enhancers);

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), defaultState, enhancers);
sagaMiddleware.run(rootSaga);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;