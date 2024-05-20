"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
// remove onesideController or nsideController, if you don't use it:
const nside_controller_1 = tslib_1.__importDefault(require("./controllers/nside.controller"));
const oneside_controller_1 = tslib_1.__importDefault(require("./controllers/oneside.controller"));
new app_1.default([new nside_controller_1.default(), new oneside_controller_1.default()]);
//# sourceMappingURL=server.js.map