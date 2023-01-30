import { SimpleFighter } from './Fighter/index';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get strength() {
    return this._strength;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints >= 0) this._lifePoints = -1;
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}