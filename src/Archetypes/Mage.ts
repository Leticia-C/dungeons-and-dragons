import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public static _valueStatic = 0;
  public energy : EnergyType;
  constructor(name: string) {
    super(name);
    Mage._valueStatic += 1;
    this.energy = 'mana';
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  public static createdArchetypeInstances() {
    return this._valueStatic;
  }
}