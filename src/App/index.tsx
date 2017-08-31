import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import Hello from "./Hello";
import { State } from "./state";

interface Props {
    store: Store<State>;
}

const App = (props: Props) =>
    <Provider store={props.store}>
        <Hello />
    </Provider>;

export default App;
