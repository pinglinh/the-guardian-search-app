import React from "react";
import ReactDOM from "react-dom";
import store from "./store";

import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello React</div>;
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
