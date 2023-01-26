"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        Ranger._valueStatic += 1;
        this.energy = 'stamina';
    }
    get energyType() {
        return this.energy;
    }
    static createdArchetypeInstances() {
        return this._valueStatic;
    }
}
exports.default = Ranger;
Ranger._valueStatic = 0;