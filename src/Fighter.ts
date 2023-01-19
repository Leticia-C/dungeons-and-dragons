import Energy from './Energy';

export interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter) :void;
  receiveDamage(attackPoints: number): number;
}

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter) :void;
  levelUp(): void;
}