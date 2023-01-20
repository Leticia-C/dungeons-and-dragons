"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity, hp = 74) {
        super(name, dexterity);
        this.hp = hp;
        Orc._valueStatic += 1;
    }
    get maxLifePoints() {
        return this.hp;
    }
    static createdRacesInstances() {
        return this._valueStatic;
    }
}
Orc._valueStatic = 0;
exports.default = Orc;
