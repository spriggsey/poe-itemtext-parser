"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBeast = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseBeast() {
    if (Patterns_1.Patterns.BeastFamily.test(this.itemtext.raw) === false) {
        return;
    }
    return {
        genus: RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.BeastGenus, this.itemtext.raw) || "Unknown",
        group: RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.BeastGroup, this.itemtext.raw) || "Unknown",
        family: RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.BeastFamily, this.itemtext.raw) || "Unknown",
    };
}
exports.parseBeast = parseBeast;
