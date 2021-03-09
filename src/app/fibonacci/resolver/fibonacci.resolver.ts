import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FibonacciService } from '../services/fibonacci.service';

@Injectable({ providedIn: 'root' })
export class FibonacciResolver implements Resolve<any> {
  constructor(private service: FibonacciService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log('fibonacci resolver running.');
    return this.service.init();
  }
}
