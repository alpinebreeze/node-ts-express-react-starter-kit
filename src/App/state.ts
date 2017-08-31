import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/developmentOnly";
import * as hello from "./Hello/state";

export interface State {
    hello: hello.State;
}

export function configureStore(initialState?: State) {

    const reducer = combineReducers<State>({
        hello: hello.reducer,
    });

    if (initialState) {
        return createStore<State>(reducer, initialState, devToolsEnhancer({}));
    }

    return createStore<State>(reducer, devToolsEnhancer({}));
}
