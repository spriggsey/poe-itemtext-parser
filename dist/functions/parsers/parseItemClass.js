"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseItemClass = void 0;
const Patterns_1 = require("../../Patterns");
function parseItemClass() {
    const match = Patterns_1.Patterns.ItemClass.exec(this.itemtext.raw);
    if (match) {
        return match[1];
    }
    return "Unknown";
}
exports.parseItemClass = parseItemClass;
