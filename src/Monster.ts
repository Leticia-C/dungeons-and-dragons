import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
    this._defense = 0;
  }

  public get strength() {
    return this._strength;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get defense() {
    return this._defense;
  }

  attack(enemy: SimpleFighter): void {
    this.receiveDamage(enemy.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage >= 0) return -1;
    return this._lifePoints - damage;
  }
}