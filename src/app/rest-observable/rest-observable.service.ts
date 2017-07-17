import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class RestObservableService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) { 
  }

}
