"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMap = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseMap() {
    if (Patterns_1.Patterns.MapTier.test(this.itemtext.raw) === false) {
        return;
    }
    return {
        quantity: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.MapQuantity, this.itemtext.raw) || 0,
        rarity: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.MapRarity, this.itemtext.raw) || 0,
        packSize: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.MapPackSize, this.itemtext.raw) || 0,
        tier: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.MapTier, this.itemtext.raw) || 0,
        blighted: Patterns_1.Patterns.MapBlighted.test(this.itemtext.raw),
        shaped: Patterns_1.Patterns.MapShaped.test(this.itemtext.raw),
        elder: Patterns_1.Patterns.MapElder.test(this.itemtext.raw),
        region: RegExpUtil_1.default.getMatchAsString(Patterns_1.Patterns.MapRegion, this.itemtext.raw) || "Unknown",
    };
}
exports.parseMap = parseMap;
