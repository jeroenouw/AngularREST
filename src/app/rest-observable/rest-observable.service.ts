import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
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
    const body = res.json();
    return body || {};
  }

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  // GET
  getPosts(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/posts', this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSpecificComments(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/posts/3/comments', this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUsers(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/users', this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUsersPosts(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/users/1/posts', this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // POST
  postPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .post(this.baseUrl + '/posts', body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // PUT
  putPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .put(this.baseUrl + '/posts/1', body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // PATCH
  patchPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .patch(this.baseUrl + '/posts/2', body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // DELETE
  deletePosts(): Observable<any> {
    return this.http
      .delete(this.baseUrl + "/posts/1", this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
