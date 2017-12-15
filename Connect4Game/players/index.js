"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) {
            exports[p] = m[p];
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./player"));
__export(require("./player-ai"));
__export(require("./player-human"));

//Allows the players to be able to be used and keeps it all consolidated