import * as assetHook from "asset-require-hook";

assetHook({
    extensions: ["css", "svg"],
    publicPath: "static/",
});

import server from "./server";

server.start(process.argv.slice(2));
