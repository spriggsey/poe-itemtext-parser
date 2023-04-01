"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDivinationCard = void 0;
const enums_1 = require("../../models/enums");
const Patterns_1 = require("../../Patterns");
function parseDivinationCard() {
    if (this.rarity !== enums_1.Rarity.DivinationCard) {
        return;
    }
    const stackSizeIdx = this.itemtext.findSectionIndex(Patterns_1.Patterns.StackSize);
    if (stackSizeIdx === undefined) {
        return;
    }
    const section = this.itemtext.getSection(stackSizeIdx + 1);
    if (section !== undefined) {
        return {
            reward: section.lines,
        };
    }
}
exports.parseDivinationCard = parseDivinationCard;
