import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {stateReducer} from "./reducer/stateReducer"
const store = createStore(stateReducer, applyMiddleware(thunk));

export default store;
