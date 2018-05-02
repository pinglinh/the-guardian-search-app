import { createStore } from "redux";

// import reducers from "../reducers";
import SearchReducer from "../reducers/Search";

const store = createStore(SearchReducer);

export default store;
