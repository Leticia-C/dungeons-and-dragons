import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private enemies:(Fighter | SimpleFighter)[];
  constructor(private player1: Fighter) {
    super(player1);
    this.enemies = [];
  }

  fight(): number {
    const figther = new Character('Legolas');
    const simpleFigther = new Monster();
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