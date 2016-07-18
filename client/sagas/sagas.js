import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects';

import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import fork from 'redux-saga';

import * as clientAPI from '../api/clientAPI'


function apiCall() {
  return fetch(`https://deadting.com/api/products`)
    .then(response => response.json())
}

function* worker_loadAllProducts(action) {
  try {
    console.log("Working: " + action.type);
    const data = yield call(clientAPI.loadAllProducts);
    const products = data.products;
    console.log("PRODUCTS: " + products);
    yield put({type: "LOAD_ALL_PRODUCTS_SUCCEEDED", products});
  } catch(e) {
    yield put({type: "LOAD_ALL_PRODUCTS_FAILED", message: e.message});
  }
}

/*
  ADD CART ITEMS
*/

function* worker_addCartItem(action) {
   try {
     console.log("Working: " + action.type);
      const items = yield call(clientAPI.addCartItem, action.item);
      console.log("Data! " + items);
      yield put({type: "ADD_CART_ITEM_SUCCEEDED", items});
   } catch (e) {
      yield put({type: "ADD_CART_ITEM_FAILED", message: e.message});
   }
}

/*
  REMOVE CART ITEMS
*/

function* worker_removeCartItem(action) {
   try {
      console.log("Working: " + action.type);
      const items = yield call(clientAPI.removeCartItem, action.sku);
      console.log("Data! " + items);
      yield put({type: "REMOVE_CART_ITEM_SUCCEEDED", items});
   } catch (e) {
      yield put({type: "REMOVE_CART_ITEM_FAILED", message: e.message});
   }
}

/*
  INCREMENT CART ITEM
*/

function* worker_incrementCartItem(action) {
   try {
      console.log("Working: " + action.type);
      const index = yield call(clientAPI.incrementCartItem, action.sku);
      yield put({type: "INCREMENT_CART_ITEM_SUCCEEDED", index});
   } catch (e) {
      yield put({type: "INCREMENT_CART_ITEM_FAILED", message: e.message});
   }
}

/*
  DECREMENT CART ITEM
*/

function* worker_decrementCartItem(action) {
   try {
      console.log("Working: " + action.type);
      const index = yield call(clientAPI.decrementCartItem, action.sku);
      yield put({type: "DECREMENT_CART_ITEM_SUCCEEDED", index});
   } catch (e) {
      yield put({type: "DECREMENT_CART_ITEM_FAILED", message: e.message});
   }
}


/*
  LOAD CART ITEMS
*/

function* worker_loadCartItems(action) {
   try {
     console.log("Working: " + action.type);
     const items = yield call(clientAPI.loadCartItems);
     yield put({type: "LOAD_CART_ITEMS_SUCCEEDED", items});
   } catch (e) {yield put({type: "LOAD_CART_ITEMS_FAILED", message: e.message});
   }
}


function* rootSaga () {
    yield [
        takeLatest("LOAD_ALL_PRODUCTS_REQUESTED", worker_loadAllProducts),
        takeLatest("LOAD_CART_ITEMS_REQUESTED", worker_loadCartItems),
        takeEvery("ADD_CART_ITEM_REQUESTED", worker_addCartItem),
        takeEvery("REMOVE_CART_ITEM_REQUESTED", worker_removeCartItem),
        takeEvery("INCREMENT_CART_ITEM_REQUESTED", worker_incrementCartItem),
        takeEvery("DECREMENT_CART_ITEM_REQUESTED", worker_decrementCartItem)
    ];
}



export default rootSaga;