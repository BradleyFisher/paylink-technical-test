import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FibonacciService {
  constructor() {}

  init(): void {
    console.log('fibonacci service init');
  }
}
