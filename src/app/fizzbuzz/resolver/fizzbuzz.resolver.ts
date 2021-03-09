import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FizzbuzzService } from '../services/fizzbuzz.service';

@Injectable({ providedIn: 'root' })
export class FizzbuzzResolver implements Resolve<any> {
  constructor(private service: FizzbuzzService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.init();
  }
}
