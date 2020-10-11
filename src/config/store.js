import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import literals from "../constants/stringLiterals";
import HomeReducer from "../container/Home/HomeReducer";

const middleware = [thunk];

var combinedReducers = combineReducers({
  HomeReducer: HomeReducer,
  ...{ stringLiterals: handleActions({}, literals) },
});
const initialState = {};
const store = createStore(
  combinedReducers,
  initialState,
  compose(applyMiddleware(...middleware))
);
export default store;
