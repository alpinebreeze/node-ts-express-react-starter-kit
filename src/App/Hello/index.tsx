import * as React from "react";
import { connect } from "react-redux";
import { State } from "../state";

interface StateProps {
    name?: string;
}

const Hello = (props: StateProps) => <h1>Hello, {props.name || "World"}!</h1>;

function mapStateToProps(state: State) {
    return { name: state.hello.name };
}

export default connect<StateProps, {}, {}>(mapStateToProps)(Hello);
