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
describe("Rare weapon", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/explode_wand.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it("should parse base item as Tornado Wand", () => {
        chai_1.expect(parser.baseItem).to.be.equal("Tornado Wand");
    });
    it("should have the synthesised flag", () => {
        chai_1.expect(parser.flags.synthesised).to.be.true;
    });
    it("should have the identified flag", () => {
        chai_1.expect(parser.flags.identified).to.be.true;
    });
    it("should have the offense property", () => {
        chai_1.expect(parser.offense).to.not.be.undefined;
    });
    it("should have the affixes property", () => {
        chai_1.expect(parser.affixes).to.not.be.undefined;
    });
    it("should parse 2 enchant affixes", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "enchant").length).to.be.equal(2);
    });
    it("should parse 1 implicit affix", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "implicit").length).to.be.equal(1);
    });
    it("should parse 4 explicit affixes", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "explicit").length).to.be.equal(4);
    });
    it("should parse 1 veiled affix", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "veiled").length).to.be.equal(1);
    });
    it("should parse socket count", () => {
        var _a;
        chai_1.expect((_a = parser.sockets) === null || _a === void 0 ? void 0 : _a.count.sockets).to.be.equal(3);
    });
    it("should parse link count", () => {
        var _a;
        chai_1.expect((_a = parser.sockets) === null || _a === void 0 ? void 0 : _a.count.links).to.be.equal(3);
    });
    it("should parse socket groups", () => {
        var _a;
        chai_1.expect((_a = parser.sockets) === null || _a === void 0 ? void 0 : _a.groups.length).to.be.equal(1);
    });
});
