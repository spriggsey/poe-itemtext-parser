"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNote = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseNote() {
    return RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.Note, this.itemtext.raw);
}
exports.parseNote = parseNote;
