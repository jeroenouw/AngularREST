import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MdButtonModule, MdIconModule, MaterialModule } from '@angular/material';

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
    HttpClientModule,
    MdButtonModule, MdIconModule, MaterialModule
  ],
  providers: [
    RestObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
