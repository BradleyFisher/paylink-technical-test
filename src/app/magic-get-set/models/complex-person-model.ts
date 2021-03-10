import { MagicGetterSetter } from './magic-getter-setter.model';

export class ComplexPersonModel extends MagicGetterSetter {
  // an example of extending from the MagicGetterSetter model.
  private age: number;
  private dateOfBirth: string;
  private address: string;

  constructor(
    forename?: string,
    surname?: string,
    career?: string,
    age?: number,
    dateOfBirth?: string,
    address?: string
  ) {
    super(forename, surname, career);
    this.age = age || 26;
    this.dateOfBirth = dateOfBirth || '11/07/1995';
    this.address = address || 'Fake Address';
  }
}
