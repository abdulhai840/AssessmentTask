import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { covidData } from "./reducers/covidData";
import { globalData } from "./reducers/globalData";

const store = createStore(
  combineReducers({ covidData, globalData }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
