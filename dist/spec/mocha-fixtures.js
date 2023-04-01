"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mochaGlobalSetup = void 0;
const chai_1 = __importDefault(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
function mochaGlobalSetup() {
    chai_1.default.use(chai_as_promised_1.default);
}
exports.mochaGlobalSetup = mochaGlobalSetup;
