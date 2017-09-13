import * as React from "react";

const providerStore = jest.fn();
const mockProvider = (props: any) => {
    providerStore(props.store);
    return <div>props.children</div>;
};

jest.mock("react-redux", () => ({
    Provider: mockProvider,
}));

const mockHello = () => <div></div>;

jest.mock("../Hello", () => ({
    default: mockHello,
}));

import { render, shallow } from "enzyme";
import App from "../";

beforeEach(() => {

    providerStore.mockClear();
});

it("should contain Provider", () => {

    const wrapper = shallow(<App store={{} as any} />);
    expect(wrapper.find(mockProvider).length).toBe(1);
});

it("should pass store to provider", () => {

    const store = {};
    render(<App store={store as any} />);
    expect(providerStore.mock.calls[0][0]).toBe(store);
});

it("should contain Hello", () => {

    const wrapper = shallow(<App store={{} as any} />);
    expect(wrapper.find(mockHello).length).toBe(1);
});
