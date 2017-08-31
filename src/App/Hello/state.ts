import { Action, ActionCreatorsMapObject, Reducer } from "redux";

export interface State {
    name?: string;
}

export interface SetNameAction extends Action {
    name: string;
}

export interface ActionCreators extends ActionCreatorsMapObject {
    setName: (name: string) => SetNameAction;
}

export const initialState: State = {};

export const types = {
    setName: "App/Hello/SET_NAME",
};

export const actionCreators: ActionCreators = {
    setName: (name: string) => ({ type: types.setName, name }),
};

export const reducer: Reducer<State> = (state: State = initialState, action: Action) => {

    switch (action.type) {
        case types.setName:
            const setName = action as SetNameAction;
            return { name: setName.name };

        default:
            return state;
    }
};
