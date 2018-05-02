import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducers from "../reducers";
import SearchReducer from "../reducers/Search";

const store = createStore(SearchReducer, applyMiddleware(thunk));

export default store;
