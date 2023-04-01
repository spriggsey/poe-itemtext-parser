"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const typescript_memoize_1 = require("typescript-memoize");
const Parsers = __importStar(require("./functions/parsers"));
const ItemText_1 = require("./ItemText");
class Parser {
    constructor(itemtext) {
        this.paseItemClass = Parsers.parseItemClass;
        this.parseRarity = Parsers.parseRarity;
        this.parseName = Parsers.parseName;
        this.parseItemLevel = Parsers.parseItemLevel;
        this.parseNote = Parsers.parseNote;
        this.parseFlags = Parsers.parseFlags;
        this.parseRequirements = Parsers.parseRequirements;
        this.parseOffense = Parsers.parseOffense;
        this.parseDefense = Parsers.parseDefense;
        this.parseFlask = Parsers.parseFlask;
        this.parseSockets = Parsers.parseSockets;
        this.parseStackSize = Parsers.parseStackSize;
        this.parseBeast = Parsers.parseBeast;
        this.parseGem = Parsers.parseGem;
        this.parseTalisman = Parsers.parseTalisman;
        this.parseBaseItem = Parsers.parseBaseItem;
        this.parseAffixes = Parsers.parseAffixes;
        this.parseMap = Parsers.parseMap;
        this.parseQuality = Parsers.parseQuality;
        this.parseDivinationCard = Parsers.parseDivinationCard;
        this.parseProphecy = Parsers.parseProphecy;
        this.parseMetamorph = Parsers.parseMetamorph;
        this.itemtext = new ItemText_1.ItemText(itemtext);
    }
    get itemClass() {
        return this.paseItemClass();
    }
    get rarity() {
        return this.parseRarity();
    }
    get name() {
        return this.parseName();
    }
    get baseItem() {
        return this.parseBaseItem();
    }
    get flags() {
        return this.parseFlags();
    }
    get itemLevel() {
        return this.parseItemLevel();
    }
    get note() {
        return this.parseNote();
    }
    get requirements() {
        return this.parseRequirements();
    }
    get offense() {
        return this.parseOffense();
    }
    get defense() {
        return this.parseDefense();
    }
    get flask() {
        return this.parseFlask();
    }
    get sockets() {
        return this.parseSockets();
    }
    get stackSize() {
        return this.parseStackSize();
    }
    get beast() {
        return this.parseBeast();
    }
    get gem() {
        return this.parseGem();
    }
    get talisman() {
        return this.parseTalisman();
    }
    get affixes() {
        return this.parseAffixes();
    }
    get map() {
        return this.parseMap();
    }
    get quality() {
        return this.parseQuality();
    }
    get divinationCard() {
        return this.parseDivinationCard();
    }
    get prophecy() {
        return this.parseProphecy();
    }
    get metamorph() {
        return this.parseMetamorph();
    }
}
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "itemClass", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "rarity", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "name", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "baseItem", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "flags", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "itemLevel", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "note", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "requirements", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "offense", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "defense", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "flask", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "sockets", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "stackSize", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "beast", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "gem", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "talisman", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "affixes", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "map", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "quality", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "divinationCard", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "prophecy", null);
__decorate([
    typescript_memoize_1.Memoize()
], Parser.prototype, "metamorph", null);
exports.Parser = Parser;
