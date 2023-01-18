import Race from './Race';

class Elf extends Race {
  static _valueStatic = 0;
  constructor(dexterity: number, name : string, public hp: number = 99) {
    super(name, dexterity);
    Elf._valueStatic += 1;
  }

  public get maxLifePoints(): number {
    return this.hp;
  }

  public static createdRacesInstances(): number {
    return this._valueStatic;
  }
}

export default Elf;