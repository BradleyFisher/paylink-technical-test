import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FizzbuzzService {
  readonly state = {
    loading: new BehaviorSubject<boolean>(true),
    fizzBuzzArray: new BehaviorSubject<number[]>([]),
  };

  readonly stream = {
    loading$: this.state.loading.asObservable(),
    fizzBuzzArray$: this.state.fizzBuzzArray.asObservable(),
  };

  constructor() {}

  init(): void {
    this.fizzBuzzCalculation();
  }

  public fizzBuzzCalculation(): void {
    this.state.loading.next(true);
    const array = [];
    let outcome = '';
    for (let i = 1; i <= 20; i++) {
      switch (true) {
        case this.fizzOrBuzz(i, 15):
          outcome = 'Fizzbuzz';
          break;
        case this.fizzOrBuzz(i, 3):
          outcome = 'Fizz';
          break;
        case this.fizzOrBuzz(i, 5):
          outcome = 'Buzz';
          break;
        default:
          outcome = i.toString();
          break;
      }
      console.log(outcome);
      array.push(outcome);
    }
    this.state.fizzBuzzArray.next(array);
    console.log(array);
    setTimeout(() => {
      // just to display loader state example.
      this.state.loading.next(false);
    }, 200);
  }

  private fizzOrBuzz(num, mod): boolean {
    return num % mod === 0;
  }
}
