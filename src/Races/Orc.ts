import Race from './Race';

class Orc extends Race {
  static _valueStatic = 0;
  constructor(dexterity: number, name : string, public hp: number = 74) {
    super(name, dexterity);
    Orc._valueStatic += 1;
  }
  
  public get maxLifePoints(): number {
    return this.hp;
  }
  
  public static createdRacesInstances(): number {
    return this._valueStatic;
  }
}

export default Orc;