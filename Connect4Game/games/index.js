//Allows the games to be able to be used and keeps it all consolidated
"use strict";

function __export(m) {
    for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./GamePvAI"));
__export(require("./GamePvP"));
//__export(require("./game-local-2p"));
//__export(require("./game-local-ai"));