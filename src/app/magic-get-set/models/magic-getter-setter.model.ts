export class MagicGetterSetter {
  private forename: string;
  private surname: string;
  private career: string;

  constructor(forename?: string, surname?: string, career?: string) {
    this.forename = forename || 'Bradley';
    this.surname = surname || 'Fisher';
    this.career = career || 'Angular Developer';
  }

  public get fullName(): string {
    return `${this.forename} ${this.surname}`;
  }

  public get personCareer(): string {
    return this.career;
  }

  public set setCareer(newCareer: string) {
    if (!newCareer.toLowerCase().includes('developer')) {
      throw new Error('Please include the word developer in the career.');
    } else {
      this.career = newCareer;
    }
  }
}
