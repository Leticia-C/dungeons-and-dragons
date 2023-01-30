import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter/index';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;
  constructor(public name: string) { 
    this.name = name;
    this._dexterity = getRandomInt(1, 11);
    this._defense = 0;
    this._race = new Elf(name, this._dexterity, 99);
    this._strength = 0;
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { amount: getRandomInt(1, 11),
      type_: this._archetype.energyType };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get lifePoints(): number {
    if (this._lifePoints === 0) return -1;
    return this._lifePoints;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void 

  levelUp(): void {
    this._strength += getRandomInt(1, 11);
    this._defense += getRandomInt(1, 11);
    this._lifePoints += getRandomInt(1, 1);
    this._dexterity += getRandomInt(1, 11);
    if (this._energy !== undefined) {
      this._energy.amount = 10;
    }
    if (this._race.maxLifePoints < this._lifePoints) {
      this._lifePoints = this._race.maxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage >= 0) this._lifePoints -= damage;
    if (this._lifePoints < 0) this._lifePoints = -1;
    return this._lifePoints;
  }
}