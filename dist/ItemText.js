"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemText = void 0;
const typescript_memoize_1 = require("typescript-memoize");
const Patterns_1 = require("./Patterns");
const Section_1 = require("./Section");
class ItemText {
    constructor(itemtext) {
        this.raw = ItemText.prepareText(itemtext);
        this.sections = ItemText.getSections(this.raw);
    }
    findSectionIndex(pattern) {
        for (let i = 0; i < this.sections.length; i++) {
            const section = this.sections[i];
            if (pattern.test(section.text)) {
                return i;
            }
        }
    }
    getSection(index) {
        if (typeof this.sections[index] !== "undefined") {
            return this.sections[index];
        }
    }
    getLineInSection(lineIdx, sectionIdx) {
        const section = this.getSection(sectionIdx);
        if (section !== undefined) {
            return section.getLine(lineIdx);
        }
    }
    static prepareText(text) {
        const prepared = text.replace(Patterns_1.Patterns.CannotUse, "");
        return prepared.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");
    }
    static getSections(text) {
        let sectionStrings = text.split(Patterns_1.Patterns.SectionDelimiter);
        sectionStrings = sectionStrings.filter((e) => e);
        const sections = [];
        for (const sectionString of sectionStrings) {
            const section = new Section_1.Section(sectionString);
            sections.push(section);
        }
        return sections;
    }
}
__decorate([
    typescript_memoize_1.Memoize()
], ItemText.prototype, "findSectionIndex", null);
__decorate([
    typescript_memoize_1.Memoize()
], ItemText.prototype, "getSection", null);
__decorate([
    typescript_memoize_1.Memoize()
], ItemText.prototype, "getLineInSection", null);
exports.ItemText = ItemText;
