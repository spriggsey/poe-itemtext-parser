"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequirements = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseRequirements() {
    if (Patterns_1.Patterns.Requirements.test(this.itemtext.raw) === false) {
        return;
    }
    return {
        level: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.RequirementsLevel, this.itemtext.raw) || 0,
        strength: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.RequirementsStr, this.itemtext.raw) || 0,
        dexterity: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.RequirementsDex, this.itemtext.raw) || 0,
        intelligence: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.RequirementsInt, this.itemtext.raw) || 0,
    };
}
exports.parseRequirements = parseRequirements;
