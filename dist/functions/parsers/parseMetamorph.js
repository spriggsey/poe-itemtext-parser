"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMetamorph = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseMetamorph() {
    if (Patterns_1.Patterns.Metamorph.test(this.itemtext.raw) === false) {
        return;
    }
    return {
        uses: RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.MetamorphAbility, this.itemtext.raw) || "Unknown",
    };
}
exports.parseMetamorph = parseMetamorph;
