import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MagicGetterSetter } from '../models/magic-getter-setter.model';

@Injectable({
  providedIn: 'root',
})
export class MagicGetSetService {
  readonly state = {
    loading: new BehaviorSubject<boolean>(true),
    magicClass: new BehaviorSubject<MagicGetterSetter>(new MagicGetterSetter()),
  };

  readonly stream = {
    loading$: this.state.loading.asObservable(),
    magicClass$: this.state.magicClass.asObservable(),
  };

  constructor() {}

  init(): void {
    this.state.loading.next(false);
  }

  setCareer(value: string): void {
    const magicClass = this.state.magicClass.getValue();
    magicClass.setCareer = value;
    this.state.magicClass.next(magicClass);
  }
}
