"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAffixes = void 0;
const enums_1 = require("../../models/enums");
const Patterns_1 = require("../../Patterns");
function parseAffixes() {
    if ([enums_1.Rarity.Normal, enums_1.Rarity.Magic, enums_1.Rarity.Rare, enums_1.Rarity.Unique].includes(this.rarity) === false) {
        return;
    }
    if (this.prophecy !== undefined) {
        return;
    }
    const affixes = [];
    const sectionIndices = getAffixSectionIndices(this);
    for (const index of sectionIndices) {
        const section = this.itemtext.getSection(index);
        if (section === undefined) {
            continue;
        }
        for (const line of section.lines) {
            const affix = stringToAffix(line);
            if (affix === null) {
                continue;
            }
            affixes.push(affix);
        }
    }
    return affixes;
}
exports.parseAffixes = parseAffixes;
const stringToAffix = (affixString) => {
    const affix = {
        text: affixString,
        formatted: "",
        values: [],
        type: enums_1.AffixType.Explicit,
    };
    if (Patterns_1.Patterns.InfluenceEaterOfWorlds.test(affixString) ||
        Patterns_1.Patterns.InfluenceSearingExarch.test(affixString)) {
        return null;
    }
    // Determine flags and remove them from text
    affix.text = affixString
        .replace(Patterns_1.Patterns.AffixEnchant, "")
        .replace(Patterns_1.Patterns.AffixImplicit, "")
        .replace(Patterns_1.Patterns.AffixCrafted, "")
        .replace(Patterns_1.Patterns.AffixFractured, "");
    affix.type = Patterns_1.Patterns.AffixEnchant.test(affixString) ? enums_1.AffixType.Enchant : affix.type;
    affix.type = Patterns_1.Patterns.AffixImplicit.test(affixString) ? enums_1.AffixType.Implicit : affix.type;
    affix.type = Patterns_1.Patterns.AffixCrafted.test(affixString) ? enums_1.AffixType.Crafted : affix.type;
    affix.type = Patterns_1.Patterns.AffixFractured.test(affixString) ? enums_1.AffixType.Fractured : affix.type;
    affix.type = Patterns_1.Patterns.AffixVeiled.test(affixString) ? enums_1.AffixType.Veiled : affix.type;
    // Remove digits from text
    affix.formatted = affix.text.replace(Patterns_1.Patterns.Digits, "#");
    // Get values
    let matches;
    while ((matches = Patterns_1.Patterns.Digits.exec(affix.text)) !== null) {
        affix.values.push(parseFloat(matches[0]));
    }
    return affix;
};
const getAffixSectionIndices = (instance) => {
    const indices = [];
    // Try to find enchant section
    const enchantIdx = instance.itemtext.findSectionIndex(Patterns_1.Patterns.AffixEnchant);
    if (enchantIdx !== undefined) {
        indices.push(enchantIdx);
    }
    // Try to find implicit section
    const implicitIdx = instance.itemtext.findSectionIndex(Patterns_1.Patterns.AffixImplicit);
    if (implicitIdx !== undefined) {
        indices.push(implicitIdx);
    }
    // Normal items have no explicits, don't bother
    if (instance.rarity === enums_1.Rarity.Normal) {
        return indices;
    }
    // If implicit index found, explicit index must be next
    if (implicitIdx !== undefined) {
        indices.push(implicitIdx + 1);
        return indices;
    }
    // If implicit index not found, but enchant, explicit index must come after enchant
    if (implicitIdx === undefined && enchantIdx !== undefined) {
        indices.push(enchantIdx + 1);
        return indices;
    }
    // If implicit and enchant index not found, explicit must come after item level
    const itemlevelIdx = instance.itemtext.findSectionIndex(Patterns_1.Patterns.ItemLevel);
    if (itemlevelIdx !== undefined) {
        indices.push(itemlevelIdx + 1);
        return indices;
    }
    // Hope this never happens :(
    return indices;
};
