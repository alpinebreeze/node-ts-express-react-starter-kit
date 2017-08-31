import * as React from "react";
import { connect } from "react-redux";
import { State } from "../state";
import * as styles from "./style.css";

interface StateProps {
    name?: string;
}

const Hello = (props: StateProps) => <h1>Hello, <span className={styles.name}>{props.name || "World"}</span>!</h1>;

function mapStateToProps(state: State) {
    return { name: state.hello.name };
}

export default connect<StateProps, {}, {}>(mapStateToProps)(Hello);
