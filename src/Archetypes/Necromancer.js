"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        Necromancer._valueStatic += 1;
        this.energy = 'mana';
    }
    get energyType() {
        return this.energy;
    }
    static createdArchetypeInstances() {
        return this._valueStatic;
    }
}
exports.default = Necromancer;
Necromancer._valueStatic = 0;
