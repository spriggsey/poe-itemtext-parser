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
describe("Gem", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/anomalous_gem.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it("should parse name", () => {
        chai_1.expect(parser.name).to.be.equal("Anomalous Vaal Discipline");
    });
    it("should parse base item", () => {
        chai_1.expect(parser.baseItem).to.be.equal("Discipline");
    });
    it("should parse rarity", () => {
        chai_1.expect(parser.rarity).to.be.equal("Gem");
    });
    it("should have the gem property", () => {
        chai_1.expect(parser.gem).to.not.be.undefined;
    });
    it("should have 5 tags", () => {
        var _a;
        chai_1.expect((_a = parser.gem) === null || _a === void 0 ? void 0 : _a.tags.length).to.be.equal(5);
    });
    it("should parse quality", () => {
        var _a;
        chai_1.expect((_a = parser.quality) === null || _a === void 0 ? void 0 : _a.value).to.be.equal(14);
    });
    it("should parse alternate quality", () => {
        var _a;
        chai_1.expect((_a = parser.gem) === null || _a === void 0 ? void 0 : _a.alternateQuality).to.be.equal("Anomalous");
    });
    it("should parse experience", () => {
        var _a, _b, _c, _d;
        chai_1.expect((_b = (_a = parser.gem) === null || _a === void 0 ? void 0 : _a.experience) === null || _b === void 0 ? void 0 : _b.current).to.be.equal(211877683);
        chai_1.expect((_d = (_c = parser.gem) === null || _c === void 0 ? void 0 : _c.experience) === null || _d === void 0 ? void 0 : _d.next).to.be.equal(211877683);
    });
    it("should parse level", () => {
        var _a;
        chai_1.expect((_a = parser.gem) === null || _a === void 0 ? void 0 : _a.level).to.be.equal(19);
    });
    it("should parse requirements", () => {
        var _a, _b;
        chai_1.expect((_a = parser.requirements) === null || _a === void 0 ? void 0 : _a.level).to.be.equal(68);
        chai_1.expect((_b = parser.requirements) === null || _b === void 0 ? void 0 : _b.intelligence).to.be.equal(151);
    });
});
