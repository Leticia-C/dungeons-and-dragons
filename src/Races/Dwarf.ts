import Race from './Race';

class Dwarf extends Race {
  public static _valueStatic = 0;
  constructor(name : string, dexterity: number, public hp: number = 80) {
    super(name, dexterity);
    Dwarf._valueStatic += 1;
  }

  public get maxLifePoints(): number {
    return this.hp;
  }

  public static createdRacesInstances(): number {
    return this._valueStatic;
  }
}

export default Dwarf;
