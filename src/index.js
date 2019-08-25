import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

import CommentApp from './containers/app';


render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById("app")
);

export default store;