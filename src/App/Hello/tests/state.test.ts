import { actionCreators, initialState, reducer } from "../state";

describe("reducer", () => {

    it("should retun the initial state if no state and unknown action type is passed", () => {

        const state = reducer(undefined as any, { type: "unknownActionType" });
        expect(state).toBe(initialState);
    });

    it("should retun passed state if unknown action type is passed", () => {

        const state = {};
        const reducedState = reducer(state, { type: "unknownActionType" });
        expect(reducedState).toBe(state);
    });

    it("should return new state object when setName action is passed", () => {

        const state = reducer(initialState, actionCreators.setName("Richard"));
        expect(state).not.toBe(initialState);
    });

    it("return a state with the correct name when setName action is passed", () => {

        const name = "Richard";
        const state = reducer(initialState, actionCreators.setName(name));
        expect(state.name).toBe(name);
    });
});
