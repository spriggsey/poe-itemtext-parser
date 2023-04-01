"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFlask = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseFlask() {
    const chargesMatch = Patterns_1.Patterns.FlaskCharges.exec(this.itemtext.raw);
    if (chargesMatch) {
        return {
            charges: {
                consumes: parseInt(chargesMatch[1], 10),
                max: parseInt(chargesMatch[2], 10),
            },
            duration: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.FlaskDuration, this.itemtext.raw) || 0,
        };
    }
}
exports.parseFlask = parseFlask;
