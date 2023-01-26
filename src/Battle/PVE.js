"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player1, enemies) {
        super(player1);
        this.player1 = player1;
        this.enemies = enemies;
    }
    fight() {
        this.enemies.forEach((enemy) => {
            while (enemy.lifePoints > 0 || this.player1.lifePoints > 0) {
                this.player1.attack(enemy);
                enemy.attack(this.player1);
                if (enemy.lifePoints === -1 || this.player1.lifePoints === -1)
                    break;
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
