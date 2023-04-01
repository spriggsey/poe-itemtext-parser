"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFlags = void 0;
const Patterns_1 = require("../../Patterns");
function parseFlags() {
    return {
        influence: {
            shaper: Patterns_1.Patterns.InfluenceShaper.test(this.itemtext.raw),
            elder: Patterns_1.Patterns.InfluenceElder.test(this.itemtext.raw),
            warlord: Patterns_1.Patterns.InfluenceWarlord.test(this.itemtext.raw),
            redeemer: Patterns_1.Patterns.InfluenceRedeemer.test(this.itemtext.raw),
            hunter: Patterns_1.Patterns.InfluenceHunter.test(this.itemtext.raw),
            crusader: Patterns_1.Patterns.InfluenceCrusader.test(this.itemtext.raw),
            eaterOfWorlds: Patterns_1.Patterns.InfluenceEaterOfWorlds.test(this.itemtext.raw),
            searingExarch: Patterns_1.Patterns.InfluenceSearingExarch.test(this.itemtext.raw)
        },
        relic: Patterns_1.Patterns.Relic.test(this.itemtext.raw),
        replica: Patterns_1.Patterns.Replica.test(this.name),
        corrupted: Patterns_1.Patterns.Corrupted.test(this.itemtext.raw),
        identified: Patterns_1.Patterns.Unidentified.test(this.itemtext.raw) === false,
        synthesised: Patterns_1.Patterns.Synthesised.test(this.itemtext.raw),
        fractured: Patterns_1.Patterns.Fractured.test(this.itemtext.raw),
        mirrored: Patterns_1.Patterns.Mirrored.test(this.itemtext.raw),
        veiled: Patterns_1.Patterns.AffixVeiled.test(this.itemtext.raw),
    };
}
exports.parseFlags = parseFlags;
