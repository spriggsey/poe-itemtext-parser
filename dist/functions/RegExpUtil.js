"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * If the supplied pattern matches the target, the first match is
 * returned as a number, otherwise `0` is returned.
 *
 * @param pattern
 * @param target
 */
const getMatchAsNumber = (pattern, target) => {
    const match = pattern.exec(target);
    if (match) {
        return parseFloat(match[1]);
    }
};
/**
 * If the supplied pattern matches the target, the first match is
 * returned as a string, otherwise `undefined` is returned.
 *
 * @param pattern
 * @param target
 */
const getMatchAsString = (pattern, target) => {
    const match = pattern.exec(target);
    if (match) {
        return match[1];
    }
};
exports.default = {
    getMatchAsNumber,
    getMatchAsString,
};
