"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRarity = void 0;
const enums_1 = require("../../models/enums");
const Patterns_1 = require("../../Patterns");
function parseRarity() {
    const match = Patterns_1.Patterns.Rarity.exec(this.itemtext.raw);
    if (match) {
        const matchedRarity = match[1];
        // TODO: Figure out why tf this loop is here
        for (const key in enums_1.Rarity) {
            const value = enums_1.Rarity[key];
            if (matchedRarity === value) {
                return value;
            }
        }
    }
    return enums_1.Rarity.Unknown;
}
exports.parseRarity = parseRarity;
