import * as React from "react";
import { connect } from "react-redux";
import { State } from "../state";
import * as logo from "./logo.svg";
import "./style.css";

interface StateProps {
    name?: string;
}

export const Hello = (props: StateProps) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            Hello, {props.name || "World"}! Congratulations on setting up your universal web app.
        </p>
    </div>
);

export function mapStateToProps(state: State) {
    return { name: state.hello.name };
}

export default connect<StateProps, {}, {}, State>(mapStateToProps)(Hello);
