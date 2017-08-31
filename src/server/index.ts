import * as cssHook from "css-modules-require-hook";

cssHook({
    generateScopedName: "[local]_[hash:base64:5]",
    rootDir: "out",
});

import server from "./server";

server.start(process.argv.slice(2));
