import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RestObservableComponent } from './rest-observable/rest-observable.component';
import { RestObservableService } from './rest-observable/rest-observable.service';

@NgModule({
  declarations: [
    AppComponent,
    RestObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RestObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
