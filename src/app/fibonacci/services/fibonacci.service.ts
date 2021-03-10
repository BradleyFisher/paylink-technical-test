import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FibonacciService {
  readonly state = {
    loading: new BehaviorSubject<boolean>(true),
    fibonacciNumber: new BehaviorSubject<number>(0),
    calculationArray: new BehaviorSubject<number[]>([]),
  };

  readonly stream = {
    loading$: this.state.loading.asObservable(),
    fibonacciNumber$: this.state.fibonacciNumber.asObservable(),
    calculationArray$: this.state.calculationArray.asObservable(),
  };

  constructor() {}

  init(): void {
    this.recalculateFibonacci(5);
  }

  public recalculateFibonacci(num: number): void {
    this.state.loading.next(true);
    this.state.calculationArray.next([]);
    const outcome = this.calculateFibonacciNumber(num);
    this.state.fibonacciNumber.next(outcome);
    setTimeout(() => {
      this.state.loading.next(false);
    }, 200);
  }

  private calculateFibonacciNumber(num: number): number {
    const array = this.state.calculationArray.getValue();
    let a = 0;
    let b = 1;
    let c = 1;
    let result = 1;
    array.push(0);

    if (num <= 1) {
      array.push(num);
      this.state.calculationArray.next(array);
      return num;
    }

    while (c < num) {
      c = a + b;
      result++;
      a = b;
      b = c;
      array.push(c);
      this.state.calculationArray.next(array);
    }
    return result;
  }
}
