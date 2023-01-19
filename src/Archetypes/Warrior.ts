import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Worrior extends Archetype {
  public static _valueStatic = 0;
  public energy : EnergyType;
  constructor(name: string) {
    super(name);
    Worrior._valueStatic += 1;
    this.energy = 'stamina';
  }
  
  get energyType(): EnergyType {
    return this.energy;
  }
  
  public static createdArchetypeInstances() {
    return this._valueStatic;
  }
}