"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monster {
    constructor() {
        this._lifePoints = 85;
        this._strength = 63;
        this._defense = 0;
    }
    get strength() {
        return this._strength;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get defense() {
        return this._defense;
    }
    attack(enemy) {
        this.receiveDamage(enemy.strength);
    }
    receiveDamage(attackPoints) {
        const damage = this._defense - attackPoints;
        if (damage >= 0)
            return -1;
        return this._lifePoints - damage;
    }
}
exports.default = Monster;
