import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../App";
import { configureStore } from "../App/state";

const initialState = (window as any).__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.hydrate(<App store={store} />, document.getElementById("root"));
