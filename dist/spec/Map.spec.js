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
describe("Map", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/fractured_tower.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it("should parse note", () => {
        chai_1.expect(parser.note).to.be.equal("~price 0.5 jewellers");
    });
    it("should have map property", () => {
        chai_1.expect(parser.map).to.not.be.undefined;
    });
    it("should parse map tier", () => {
        var _a;
        chai_1.expect((_a = parser.map) === null || _a === void 0 ? void 0 : _a.tier).to.be.equal(2);
    });
    it("should parse map quantity", () => {
        var _a;
        chai_1.expect((_a = parser.map) === null || _a === void 0 ? void 0 : _a.quantity).to.be.equal(94);
    });
    it("should parse map rarity", () => {
        var _a;
        chai_1.expect((_a = parser.map) === null || _a === void 0 ? void 0 : _a.rarity).to.be.equal(36);
    });
    it("should parse map pack size", () => {
        var _a;
        chai_1.expect((_a = parser.map) === null || _a === void 0 ? void 0 : _a.packSize).to.be.equal(23);
    });
    it("should parse map region", () => {
        var _a;
        chai_1.expect((_a = parser.map) === null || _a === void 0 ? void 0 : _a.region).to.be.equal("Glennach Cairns");
    });
});
