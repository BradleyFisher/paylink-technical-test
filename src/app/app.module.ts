import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { MagicGetSetComponent } from './magic-get-set/magic-get-set.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProfileImageComponent } from './shared/components/profile-image/profile-image.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { FormsModule } from '@angular/forms';
import { GlobalErrorHandler } from './shared/errors/global-error-handler';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    FibonacciComponent,
    MagicGetSetComponent,
    SidebarComponent,
    ProfileImageComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
