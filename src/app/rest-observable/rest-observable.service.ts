import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestObservableService {
  headers: Headers;
  options: RequestOptions;
  
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http) {         
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }
 
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  } 

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
 
  getPosts(): Observable<any>{
    return this.http
      .get(this.baseUrl + '/posts', this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
 
  getSpecificComments(): Observable<any>{
    return this.http
      .get(this.baseUrl + '/posts/3/comments', this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }   
    
  postPosts(param: any): Observable<any> {
      let body = JSON.stringify(param);
      return this.http
        .post(this.baseUrl + '/posts', body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }

}
