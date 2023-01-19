import Race from './Race';

class Halfling extends Race {
  static _valueStatic = 0;
  constructor(name : string, dexterity: number, public hp: number = 60) {
    super(name, dexterity);
    Halfling._valueStatic += 1;
  }

  public get maxLifePoints(): number {
    return this.hp;
  }
  
  public static createdRacesInstances(): number {
    return this._valueStatic;
  }
}

export default Halfling;