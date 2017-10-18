import * as React from "react";

const mockHydrate = jest.fn();

jest.mock("react-dom", () => ({
    hydrate: mockHydrate,
}));

const mockApp = () => <div></div>;

jest.mock("../../App", () => ({
    default: mockApp,
}));

const mockStore = { store: true };
const mockConfigureStore = jest.fn(() => mockStore);

jest.mock("../../App/state", () => ({
    configureStore: mockConfigureStore,
}));

const initialState = { state: true };
(window as any).__INITIAL_STATE__ = initialState;

import "../";
import App from "../../App";

it("should call configureStore with initial state", () => {

    expect(mockConfigureStore).toBeCalledWith(initialState);
});

it("should call ReactDOM.render with App", () => {

    expect(mockHydrate.mock.calls[0][0]).toEqual(<App store={mockStore as any} />);
});
