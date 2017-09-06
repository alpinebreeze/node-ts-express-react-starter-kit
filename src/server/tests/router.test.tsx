import * as React from "react";

// mock express
const mockGet = jest.fn();
const mockRouter = jest.fn(() => ({ get: mockGet, use: jest.fn() }));

jest.mock("express", () => ({
    Router: mockRouter,
    static: jest.fn(),
}));

// mock App
const mockApp = () => <div></div>;

jest.mock("../../App", () => ({ default: mockApp }));

// mock App state
const mockStore = {
    dispatch: jest.fn(),
    getState: jest.fn(),
};

jest.mock("../../App/state", () => ({ configureStore: jest.fn(() => mockStore) }));

// mock App Hello state
const mockSetName = jest.fn();

jest.mock("../../App/Hello/state", () => ({ actionCreators: { setName: mockSetName } }));

import router, { getRootRequestHandler } from "../router";

describe("getRootRequestHandler", () => {

    const mockRes = {
        render: jest.fn(),
    };

    beforeEach(() => {

        mockRes.render.mockClear();
        mockStore.dispatch.mockClear();
        mockSetName.mockClear();
    });

    it("should render index view", () => {

        getRootRequestHandler({ query: {} } as any, mockRes as any, jest.fn());
        expect(mockRes.render.mock.calls[0][0]).toBe("index");
    });

    it("should not call store.dispatch or actions.setName if no name is set in the query params", () => {

        getRootRequestHandler({ query: {} } as any, mockRes as any, jest.fn());
        expect(mockStore.dispatch).toHaveBeenCalledTimes(0);
        expect(mockSetName).toHaveBeenCalledTimes(0);
    });

    it("should call store.dispatch and actions.setName if a name is set in the query params", () => {

        const name = "Richard";
        getRootRequestHandler({ query: { name } } as any, mockRes as any, jest.fn());
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
        expect(mockSetName).toBeCalledWith(name);
    });
});

describe("router", () => {

    it("should bind getRootRequestHandler to the HTTP GET method", () => {

        router();
        expect(mockGet).toBeCalledWith("/", getRootRequestHandler);
    });
});
