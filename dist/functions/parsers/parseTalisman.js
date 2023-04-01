"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTalisman = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseTalisman() {
    if (Patterns_1.Patterns.TalismanTier.test(this.itemtext.raw) === false) {
        return;
    }
    return {
        tier: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.TalismanTier, this.itemtext.raw) || 0,
    };
}
exports.parseTalisman = parseTalisman;
