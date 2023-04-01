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
describe("Divination Card", function () {
    let parser;
    before(() => __awaiter(this, void 0, void 0, function* () {
        const itemtext = yield readFile("./src/resource/sample/divination_card.txt", "UTF-8");
        parser = new Parser_1.Parser(itemtext);
    }));
    it("should parse rarity", () => {
        chai_1.expect(parser.rarity).to.be.equal("Divination Card");
    });
    it("should have divination card property", () => {
        chai_1.expect(parser.divinationCard).to.not.be.null;
    });
    it("should parse reward", () => {
        var _a;
        chai_1.expect((_a = parser.divinationCard) === null || _a === void 0 ? void 0 : _a.reward[0]).to.be.equal("Diamond Ring");
    });
});
