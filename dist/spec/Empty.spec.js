"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const Parser_1 = require("../Parser");
describe("Empty string as itemtext", function () {
    let parser;
    before(() => {
        parser = new Parser_1.Parser("");
    });
    it("should parse name as Unknown", () => {
        chai_1.expect(parser.name).to.be.equal("Unknown");
    });
    it("should parse base item as Unknown", () => {
        chai_1.expect(parser.baseItem).to.be.equal("Unknown");
    });
    it("should not have any properties", () => {
        chai_1.expect(parser.metamorph).to.be.undefined;
        chai_1.expect(parser.beast).to.be.undefined;
        chai_1.expect(parser.talisman).to.be.undefined;
        chai_1.expect(parser.divinationCard).to.be.undefined;
        chai_1.expect(parser.flask).to.be.undefined;
        chai_1.expect(parser.sockets).to.be.undefined;
        chai_1.expect(parser.stackSize).to.be.undefined;
        chai_1.expect(parser.affixes).to.be.undefined;
        chai_1.expect(parser.note).to.be.undefined;
        chai_1.expect(parser.itemLevel).to.be.undefined;
        chai_1.expect(parser.map).to.be.undefined;
        chai_1.expect(parser.offense).to.be.undefined;
        chai_1.expect(parser.defense).to.be.undefined;
        chai_1.expect(parser.gem).to.be.undefined;
        chai_1.expect(parser.requirements).to.be.undefined;
        chai_1.expect(parser.quality).to.be.undefined;
    });
});
