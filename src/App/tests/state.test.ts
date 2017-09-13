const mockCombinedReducer = {};
const mockCombineReducers = jest.fn(() => mockCombinedReducer);
const mockCreateStore = jest.fn();

jest.mock("redux", () => ({
    combineReducers: mockCombineReducers,
    createStore: mockCreateStore,
}));

import { reducer as helloReducer } from "../Hello/state";
import { configureStore } from "../state";

describe("configureStore", () => {

    beforeEach(() => {

        mockCombineReducers.mockClear();
        mockCreateStore.mockClear();
    });

    it("should call combineReducers with the hello reducer", () => {

        configureStore();
        expect(mockCombineReducers).toBeCalledWith({ hello: helloReducer });
    });

    it("should call createStore with combined reducer", () => {

        configureStore();
        expect(mockCreateStore.mock.calls[0][0]).toBe(mockCombinedReducer);
    });

    it("should call createStore with combined reducer and initial state if one is passed", () => {

        const initialState = {};
        configureStore(initialState as any);
        expect(mockCreateStore.mock.calls[0][0]).toBe(mockCombinedReducer);
        expect(mockCreateStore.mock.calls[0][1]).toBe(initialState);
    });
});
