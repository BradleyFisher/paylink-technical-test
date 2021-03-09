import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { MagicGetSetComponent } from './magic-get-set/magic-get-set.component';

@NgModule({
  declarations: [AppComponent, FizzbuzzComponent, FibonacciComponent, MagicGetSetComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
