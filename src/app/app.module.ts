import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RestObservableComponent } from './rest-observable/rest-observable.component';
import { RestObservableService } from './rest-observable/rest-observable.service';

@NgModule({
  declarations: [
    AppComponent,
    RestObservableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    RestObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
