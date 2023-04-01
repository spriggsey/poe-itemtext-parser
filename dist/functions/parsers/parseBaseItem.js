"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBaseItem = void 0;
const base_items_json_1 = __importDefault(require("../../resource/base_items.json"));
function parseBaseItem() {
    const section = this.itemtext.getSection(0);
    if (section === undefined) {
        return "Unknown";
    }
    if (this.prophecy !== undefined) {
        return "Prophecy";
    }
    if (this.beast !== undefined) {
        return "Imprinted Bestiary Orb";
    }
    if (this.metamorph !== undefined) {
        return getMetamorphBaseItem(section.lines[1]);
    }
    // If Rare/Unique: line 3, if Normal/Magic: line 2
    let baseItem = section.lines.length === 3 ? section.lines[2] : section.lines[1];
    baseItem = section.lines.length === 4 ? section.lines[3] : baseItem;
    // Check if this base item is in game files
    // This will remove prefix/suffix from magic items, synthesised prefix, blighted prefix, ...
    const found = Object.values(base_items_json_1.default).find((item) => {
        return baseItem.includes(item.name);
    });
    if (found !== undefined) {
        baseItem = found.name;
    }
    return baseItem;
}
exports.parseBaseItem = parseBaseItem;
const getMetamorphBaseItem = (baseItem) => {
    const types = ["Heart", "Brain", "Liver", "Lung", "Eye"];
    for (const type of types) {
        if (baseItem.includes(type)) {
            return `Metamorph ${type}`;
        }
    }
    return "Unknown Metamorph Sample";
};
