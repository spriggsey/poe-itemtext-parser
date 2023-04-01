"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQuality = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseQuality() {
    if (Patterns_1.Patterns.Quality.test(this.itemtext.raw) === false) {
        return;
    }
    const data = {
        value: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.Quality, this.itemtext.raw) || 0,
    };
    const catalyst = RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.QualityCatalyst, this.itemtext.raw);
    if (catalyst !== undefined) {
        data.catalyst = catalyst;
    }
    return data;
}
exports.parseQuality = parseQuality;
