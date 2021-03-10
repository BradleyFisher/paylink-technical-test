import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MagicGetSetService } from '../services/magic-get-set.service';

@Injectable({ providedIn: 'root' })
export class MagicGetSetResolver implements Resolve<any> {
  constructor(private service: MagicGetSetService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.init();
  }
}
