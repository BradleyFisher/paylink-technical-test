import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FizzbuzzService {
  constructor() {}

  init(): void {
    console.log('service init');
  }
}
