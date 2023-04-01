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
describe("Prophecy", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/prophecy.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it("should parse base item as Prophecy", () => {
        chai_1.expect(parser.baseItem).to.be.equal("Prophecy");
    });
    it("should have the prophecy property", () => {
        chai_1.expect(parser.prophecy).to.not.be.undefined;
    });
    it("should not have the affixes property", () => {
        chai_1.expect(parser.affixes).to.be.undefined;
    });
    it("should parse flavour text correctly", () => {
        var _a;
        chai_1.expect((_a = parser.prophecy) === null || _a === void 0 ? void 0 : _a.flavourText).to.be.equal("Beyond the golden gears, the edges of reality crack, and something hidden from sight spills through");
    });
    it("should parse objective correctly", () => {
        var _a;
        chai_1.expect((_a = parser.prophecy) === null || _a === void 0 ? void 0 : _a.objective).to.be.equal("You will find and destroy monsters from Beyond who are trying to invade Wraeclast through the map device");
    });
});
