import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { FizzbuzzResolver } from './fizzbuzz/resolver/fizzbuzz.resolver';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
