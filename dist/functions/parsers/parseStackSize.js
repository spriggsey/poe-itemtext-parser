"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStackSize = void 0;
const Patterns_1 = require("../../Patterns");
function parseStackSize() {
    const match = Patterns_1.Patterns.StackSize.exec(this.itemtext.raw);
    if (match) {
        return {
            size: parseInt(match[1].replace(/,/g, ""), 10),
            max: parseInt(match[2].replace(/,/g, ""), 10),
        };
    }
}
exports.parseStackSize = parseStackSize;
