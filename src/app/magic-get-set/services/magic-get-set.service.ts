import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MagicGetSetService {
  constructor() {}

  init(): void {
    console.log('magic service init');
  }
}
