"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDefense = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseDefense() {
    const blockChance = RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.BlockChance, this.itemtext.raw);
    const evasion = RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.Evasion, this.itemtext.raw);
    const energyShield = RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.EnergyShield, this.itemtext.raw);
    const armour = RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.Armour, this.itemtext.raw);
    if (blockChance !== undefined ||
        evasion !== undefined ||
        energyShield !== undefined ||
        armour !== undefined) {
        return {
            blockChance: blockChance || 0,
            evasion: evasion || 0,
            energyShield: energyShield || 0,
            armour: armour || 0,
        };
    }
}
exports.parseDefense = parseDefense;
