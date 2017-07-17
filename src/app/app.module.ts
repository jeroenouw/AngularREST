import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MdButtonModule, MdIconModule, MaterialModule } from '@angular/material';
import 'hammerjs';

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
    HttpModule,
    MdButtonModule, MdIconModule, MaterialModule
  ],
  providers: [
    RestObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
