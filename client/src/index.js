import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import auth from "./stores/reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(auth);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
