// import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter/index';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private player1: Fighter,
    public enemies: (SimpleFighter | Fighter)[],
  ) {
    super(player1);
  }

  fight(): number {
    this.enemies.forEach((enemy, i, arr) => {
      while (this.player1.lifePoints > 0 && enemy.lifePoints > 0) {
        this.player1.attack(enemy);
        enemy.attack(this.player1);
        if (i === (arr.length - 1) && enemy.lifePoints === -1) break;
      }
    });
    return super.fight();
  }
}