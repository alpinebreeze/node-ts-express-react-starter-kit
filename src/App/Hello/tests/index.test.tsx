import { render } from "enzyme";
import * as React from "react";
import { Hello, mapStateToProps } from "../";

describe("Hello", () => {

    it("should render 'Hello, World!' when no name is passed", () => {

        const wrapper = render(<Hello />);
        const text = wrapper.text();
        expect(text).toContain("Hello, World!");
    });

    it("should render 'Hello, Richard!' when 'Richard' is passed as name", () => {

        const wrapper = render(<Hello name="Richard" />);
        const text = wrapper.text();
        expect(text).toContain("Hello, Richard!");
    });
});

describe("mapStateToProps", () => {

    it("should return map state.hello.name to name", () => {

        const name = "Richard";
        const prop = mapStateToProps({ hello: { name } });
        expect(prop).toEqual({ name });
    });
});
