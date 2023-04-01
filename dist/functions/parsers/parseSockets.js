"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSockets = void 0;
const Patterns_1 = require("../../Patterns");
function parseSockets() {
    const match = Patterns_1.Patterns.Sockets.exec(this.itemtext.raw);
    if (match) {
        const data = {
            groups: [],
            count: {
                links: 0,
                sockets: 0,
            },
        };
        const socketString = match[1];
        let linkedStrings = socketString.split(" ");
        linkedStrings = linkedStrings.filter((e) => e);
        const groups = [];
        for (const linkedString of linkedStrings) {
            const linkedArray = linkedString.split("-");
            groups.push(linkedArray);
        }
        if (groups.length > 0) {
            const lengths = groups.map((group) => group.length);
            data.count.links = Math.max(...lengths);
            data.count.sockets = lengths.reduce((pv, cv) => pv + cv, 0);
            data.groups = groups;
        }
        return data;
    }
}
exports.parseSockets = parseSockets;
