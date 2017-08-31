import * as express from "express";
import * as path from "path";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../App";
import { actionCreators as helloActions } from "../App/Hello/state";
import { configureStore } from "../App/state";

export const getRootRequestHandler: express.RequestHandler = (req, res) => {

    const store = configureStore();

    if (req.query.name) {
        store.dispatch(helloActions.setName(req.query.name));
    }

    const state = store.getState();
    const initialState = JSON.stringify(state);
    const html = renderToString(<App store={store} />);
    res.render("index", { html, initialState });
};

export default () => {

    const router = express.Router();
    router.use("/static", express.static(path.resolve(__dirname, "../public")));
    router.get("/", getRootRequestHandler);
    return router;
};
