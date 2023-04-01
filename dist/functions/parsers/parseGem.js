"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGem = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const enums_1 = require("../../models/enums");
const Patterns_1 = require("../../Patterns");
function parseGem() {
    if (this.rarity !== enums_1.Rarity.Gem) {
        return;
    }
    const section = this.itemtext.getSection(1);
    if (section === undefined) {
        return;
    }
    const data = {
        level: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.GemLevel, section.text) || 1,
        tags: [],
    };
    // Experience
    const experienceMatch = Patterns_1.Patterns.GemExperience.exec(this.itemtext.raw);
    if (experienceMatch) {
        data.experience = {
            current: parseInt(experienceMatch[1], 10),
            next: parseInt(experienceMatch[2], 10),
        };
    }
    // Alternate Quality
    if (Patterns_1.Patterns.AlternateQuality.test(section.text)) {
        data.alternateQuality = this.name.replace(/\s.*/, "");
    }
    // Tags
    const tagLine = this.itemtext.getLineInSection(0, 1);
    if (tagLine) {
        data.tags = tagLine.split(", ");
    }
    return data;
}
exports.parseGem = parseGem;
