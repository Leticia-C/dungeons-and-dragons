"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity, hp = 80) {
        super(name, dexterity);
        this.hp = hp;
        Dwarf._valueStatic += 1;
    }
    get maxLifePoints() {
        return this.hp;
    }
    static createdRacesInstances() {
        return this._valueStatic;
    }
}
Dwarf._valueStatic = 0;
exports.default = Dwarf;
