"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const Parser_1 = require("../Parser");
const readFile = util_1.default.promisify(fs_1.default.readFile);
describe("Rare ring", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/ring_catalyst.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it("should have the fractured flag", () => {
        chai_1.expect(parser.flags.fractured).to.be.true;
    });
    it("should have the corrupted flag", () => {
        chai_1.expect(parser.flags.corrupted).to.be.true;
    });
    it("should have the catalyst type", () => {
        var _a;
        chai_1.expect((_a = parser.quality) === null || _a === void 0 ? void 0 : _a.catalyst).to.be.equal("Caster Modifiers");
    });
    it("should have 1 fractured affix", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "fractured").length).to.be.equal(1);
    });
    it("should have 1 crafted affixes", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "crafted").length).to.be.equal(1);
    });
});
