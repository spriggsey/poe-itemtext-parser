"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOffense = void 0;
const RegExpUtil_1 = __importDefault(require("../RegExpUtil"));
const Patterns_1 = require("../../Patterns");
function parseOffense() {
    if (Patterns_1.Patterns.AttacksPerSecond.test(this.itemtext.raw) === false) {
        return;
    }
    const data = {
        range: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.WeaponRange, this.itemtext.raw) || 0,
        critChance: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.CriticalStrikeChance, this.itemtext.raw) || 0,
        aps: RegExpUtil_1.default.getMatchAsNumber(Patterns_1.Patterns.AttacksPerSecond, this.itemtext.raw) || 0,
        damage: {
            physical: getDamageRange(Patterns_1.Patterns.FlatPhysicalDamage, this.itemtext.raw),
            fire: getDamageRange(Patterns_1.Patterns.FlatFireDamage, this.itemtext.raw),
            cold: getDamageRange(Patterns_1.Patterns.FlatColdDamage, this.itemtext.raw),
            lightning: getDamageRange(Patterns_1.Patterns.FlatLightningDamage, this.itemtext.raw),
            chaos: getDamageRange(Patterns_1.Patterns.FlatChaosDamage, this.itemtext.raw),
        },
        dps: {
            physical: 0,
            fire: 0,
            cold: 0,
            lightning: 0,
            elemental: 0,
            chaos: 0,
            total: 0,
        },
    };
    data.dps.physical = calculateDPS(data.damage.physical, data.aps);
    data.dps.fire = calculateDPS(data.damage.fire, data.aps);
    data.dps.cold = calculateDPS(data.damage.cold, data.aps);
    data.dps.lightning = calculateDPS(data.damage.lightning, data.aps);
    data.dps.chaos = calculateDPS(data.damage.chaos, data.aps);
    data.dps.elemental = data.dps.fire + data.dps.cold + data.dps.lightning;
    data.dps.total = data.dps.elemental + data.dps.physical + data.dps.chaos;
    return data;
}
exports.parseOffense = parseOffense;
function getDamageRange(pattern, itemtext) {
    const data = {
        min: 0,
        max: 0,
    };
    const match = pattern.exec(itemtext);
    if (match) {
        data.min = parseInt(match[1], 10);
        data.max = parseInt(match[2], 10);
    }
    return data;
}
function calculateDPS(damage, aps) {
    const dps = ((damage.min + damage.max) / 2) * aps;
    return +dps.toFixed(2);
}
