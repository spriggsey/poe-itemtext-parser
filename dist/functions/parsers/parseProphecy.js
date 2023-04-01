"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseProphecy = void 0;
const Patterns_1 = require("../../Patterns");
function parseProphecy() {
    if (Patterns_1.Patterns.Prophecy.test(this.itemtext.raw) === false) {
        return;
    }
    const flavourTextSection = this.itemtext.getSection(1);
    const objectiveSection = this.itemtext.getSection(2);
    if (flavourTextSection === undefined || objectiveSection === undefined) {
        return;
    }
    return {
        objective: objectiveSection.lines.join(),
        flavourText: flavourTextSection.lines.join(),
    };
}
exports.parseProphecy = parseProphecy;
