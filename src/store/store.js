import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./Auth/reducer/userReduce";
import homeReducer from "./Home/reducer/homeReducer";
const reducer = combineReducers({
  userReducer: userReducer,
  homeReducer: homeReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
