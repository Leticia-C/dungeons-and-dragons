import Energy from './Energy';

export interface SimpleFighter {
  lifePoints: number;
  strength: number;
  defense: number;
  attack(enemy: SimpleFighter) :void;
  receiveDamage(attackPoints: number): number;
}

export default interface Fighter extends SimpleFighter {
  energy?: Energy;
  special?(enemy: Fighter) :void;
  levelUp(): void;
}