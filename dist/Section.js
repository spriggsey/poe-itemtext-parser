"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const typescript_memoize_1 = require("typescript-memoize");
class Section {
    constructor(text) {
        this.text = Section.prepareText(text);
        this.lines = Section.getLines(this.text);
    }
    getLine(index) {
        if (typeof this.lines[index] !== "undefined") {
            return this.lines[index];
        }
    }
    /**
     * Removes trailing and leading newlines
     *
     * @param text
     * @returns
     */
    static prepareText(text) {
        return text.replace(/^[\r\n]+|\.|[\r\n]+$/g, "");
    }
    static getLines(text) {
        const lines = text.split(/\r?\n/);
        return lines.filter((e) => e);
    }
}
__decorate([
    typescript_memoize_1.Memoize()
], Section.prototype, "getLine", null);
exports.Section = Section;
