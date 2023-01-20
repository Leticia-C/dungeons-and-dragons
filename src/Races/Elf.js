"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity, hp = 99) {
        super(name, dexterity);
        this.hp = hp;
        Elf._valueStatic += 1;
    }
    get maxLifePoints() {
        return this.hp;
    }
    static createdRacesInstances() {
        return this._valueStatic;
    }
}
Elf._valueStatic = 0;
exports.default = Elf;
