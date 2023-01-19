import Energy from './Energy';

export interface SimpleFighter {
  defense: number;
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter) :void;
  receiveDamage(attackPoints: number): number;
}

export default interface Fighter extends SimpleFighter {
  energy?: Energy;
  special?(enemy: Fighter) :void;
  levelUp(): void;
}