"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseName = void 0;
const enums_1 = require("../../models/enums");
const Patterns_1 = require("../../Patterns");
function parseName() {
    let name = this.itemtext.getLineInSection(1, 0);
    // if the item has an Item Class: line then the name 1 more line down
    // this is a bit hacky but it allows for backwards compatibility
    if (Patterns_1.Patterns.ItemClass.test(this.itemtext.raw)) {
        name = this.itemtext.getLineInSection(2, 0);
    }
    if (name === undefined) {
        return "Unknown";
    }
    if (this.rarity === enums_1.Rarity.Gem) {
        const match = Patterns_1.Patterns.VaalGem.exec(this.itemtext.raw);
        if (match) {
            name = match[1];
        }
    }
    return name;
}
exports.parseName = parseName;
