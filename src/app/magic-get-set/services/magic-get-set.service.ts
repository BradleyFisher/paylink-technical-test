import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ComplexPersonModel } from '../models/complex-person-model';
import { MagicGetterSetter } from '../models/magic-getter-setter.model';

@Injectable({
  providedIn: 'root',
})
export class MagicGetSetService {
  readonly state = {
    loading: new BehaviorSubject<boolean>(true),
    magicClass: new BehaviorSubject<MagicGetterSetter>(new MagicGetterSetter()),
    extendedClass: new BehaviorSubject<ComplexPersonModel>(
      new ComplexPersonModel()
    ), // please also see this extended class. Though it has not been implemented. Thank you.
  };

  readonly stream = {
    loading$: this.state.loading.asObservable(),
    magicClass$: this.state.magicClass.asObservable(),
  };

  constructor(private toastrService: ToastrService) {}

  init(): void {
    this.state.loading.next(false);
  }

  public setCareer(value: string): void {
    const magicClass = this.state.magicClass.getValue();
    magicClass.setCareer = value;
    this.state.magicClass.next(magicClass);
    this.toastrService.success('Successfully updated.');
  }
}
