"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this.name = name;
        this.name = name;
        this._dexterity = (0, utils_1.default)(1, 10);
        this._defense = 0;
        this._race = new Races_1.Elf(name, this._dexterity, 99);
        this._strength = 0;
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = 0;
        this._lifePoints = 0;
        this._energy = { amount: (0, utils_1.default)(1, 10),
            type_: this._archetype.energyType };
    }
    get dexterity() {
        return this._dexterity;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get energy() {
        return Object.assign({}, this._energy);
    }
    get lifePoints() {
        if (this._lifePoints === 0)
            return -1;
        return this._lifePoints;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._strength += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._lifePoints += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        if (this._energy !== undefined) {
            this._energy.amount = 10;
        }
        if (this._race.maxLifePoints < this._lifePoints) {
            this._lifePoints = this._race.maxLifePoints;
        }
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (this._lifePoints >= 0)
            return this._lifePoints - damage;
        return -1;
    }
}
exports.default = Character;
