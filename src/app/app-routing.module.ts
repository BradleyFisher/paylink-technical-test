import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { FibonacciResolver } from './fibonacci/resolver/fibonacci.resolver';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { FizzbuzzResolver } from './fizzbuzz/resolver/fizzbuzz.resolver';
import { MagicGetSetComponent } from './magic-get-set/magic-get-set.component';
import { MagicGetSetResolver } from './magic-get-set/resolver/magic-get-set.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fizzbuzz',
  },
  {
    path: 'fizzbuzz',
    component: FizzbuzzComponent,
    resolve: {
      init: FizzbuzzResolver,
    },
  },
  {
    path: 'fibonacci',
    component: FibonacciComponent,
    resolve: {
      init: FibonacciResolver,
    },
  },
  {
    path: 'magic-get-set',
    component: MagicGetSetComponent,
    resolve: {
      init: MagicGetSetResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
