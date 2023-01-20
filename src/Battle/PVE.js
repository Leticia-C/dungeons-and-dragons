"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("../Character");
const Monster_1 = require("../Monster");
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player1) {
        super(player1);
        this.player1 = player1;
        this.enemies = [];
    }
    fight() {
        const figther = new Character_1.default('Legolas');
        const simpleFigther = new Monster_1.default();
        this.enemies.push(figther, simpleFigther);
        for (let i = 0; i < this.enemies.length; i += 1) {
            while (this.enemies[i].lifePoints > 0 && this.player1.lifePoints > 0) {
                this.player1.attack(this.enemies[i]);
                this.enemies[i].attack(this.player1);
            }
        }
        return super.fight();
    }
}
exports.default = PVE;
