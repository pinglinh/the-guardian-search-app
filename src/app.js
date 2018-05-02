import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";

import Search from "./containers/Search";

const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
