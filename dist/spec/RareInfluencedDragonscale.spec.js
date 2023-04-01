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
describe("Rare Dragonscale Influenced", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/dragonscale_chest.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it('should parse item class as Body Armours', () => {
        chai_1.expect(parser.itemClass).to.be.equal("Body Armours");
    });
    it("should parse base item as Full Dragonscale", () => {
        chai_1.expect(parser.baseItem).to.be.equal("Full Dragonscale");
    });
    it("should parse item name as Havoc Carapace", () => {
        chai_1.expect(parser.name).to.be.equal("Havoc Carapace");
    });
    it("should have an armour stat of 1019", () => {
        var _a;
        chai_1.expect((_a = parser.defense) === null || _a === void 0 ? void 0 : _a.armour).to.be.equal(1019);
    });
    it("should be of the rare rarity", () => {
        chai_1.expect(parser.rarity).to.be.equal("Rare");
    });
    it("should not have the synthesised flag", () => {
        chai_1.expect(parser.flags.synthesised).to.be.false;
    });
    it("should have the identified flag", () => {
        chai_1.expect(parser.flags.identified).to.be.true;
    });
    it("should have the defense property", () => {
        chai_1.expect(parser.defense).to.not.be.undefined;
    });
    it("should not have the offense property", () => {
        chai_1.expect(parser.offense).to.be.undefined;
    });
    it("should have the affixes property", () => {
        chai_1.expect(parser.affixes).to.not.be.undefined;
    });
    it("should parse 2 implicit affix", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "implicit").length).to.be.equal(2);
    });
    it("should parse 7 explicit affixes", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "explicit").length).to.be.equal(7);
    });
    it("should have the eater of worlds influence flag", () => {
        chai_1.expect(parser.flags.influence.eaterOfWorlds).to.be.true;
    });
    it("should have the searing exarch influence flag", () => {
        chai_1.expect(parser.flags.influence.searingExarch).to.be.true;
    });
    it("should parse 0 veiled affix", () => {
        var _a;
        chai_1.expect((_a = parser.affixes) === null || _a === void 0 ? void 0 : _a.filter((affix) => affix.type === "veiled").length).to.be.equal(0);
    });
    it("should parse socket count", () => {
        var _a;
        chai_1.expect((_a = parser.sockets) === null || _a === void 0 ? void 0 : _a.count.sockets).to.be.equal(6);
    });
    it("should parse link count", () => {
        var _a;
        chai_1.expect((_a = parser.sockets) === null || _a === void 0 ? void 0 : _a.count.links).to.be.equal(6);
    });
    it("should parse socket groups", () => {
        var _a;
        chai_1.expect((_a = parser.sockets) === null || _a === void 0 ? void 0 : _a.groups.length).to.be.equal(1);
    });
});
