"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseItemLevel = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseItemLevel() {
    return RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.ItemLevel, this.itemtext.raw);
}
exports.parseItemLevel = parseItemLevel;
