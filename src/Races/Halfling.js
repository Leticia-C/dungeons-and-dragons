"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity, hp = 60) {
        super(name, dexterity);
        this.hp = hp;
        Halfling._valueStatic += 1;
    }
    get maxLifePoints() {
        return this.hp;
    }
    static createdRacesInstances() {
        return this._valueStatic;
    }
}
Halfling._valueStatic = 0;
exports.default = Halfling;
