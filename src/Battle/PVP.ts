import Fighter from '../Fighter/index';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1 : Fighter, private player2: Fighter) {
    super(player1);
  }

  figth() {
    while (this.player2.lifePoints > 0 && this.player1.lifePoints > 0) {
      this.player2.attack(this.player1);
      this.player1.attack(this.player2);
    }
    return super.fight();
  }
}