import {  applyMiddleware } from "redux";
//import thunk from "redux-thunk"; 
import productSaga from './productSaga'
//import {stateReducer} from "./reducer/stateReducer"
import stateSlice from "./reducer/stateReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
//const store = createStore(stateReducer, applyMiddleware(thunk));

const store = configureStore({
    reducer: {
        stateSlice :stateSlice.reducer,
    },  
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware),
    
  })



  sagaMiddleware.run(productSaga)
export default store;
