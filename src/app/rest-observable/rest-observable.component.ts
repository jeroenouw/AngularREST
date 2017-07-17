import { Component, OnInit } from '@angular/core';
import { RestObservableService } from './rest-observable.service';

@Component({
  selector: 'app-rest-observable',
  templateUrl: './rest-observable.component.html'
})
export class RestObservableComponent implements OnInit {
  displayPosts: string;
  displayComments: string;
  postPosts: string;
  putPosts: string;
  patchPosts: string;

  errorMessage: string;

  constructor(private roservice: RestObservableService) { }

  ngOnInit() {
  }

  onGetPosts() {
    this.roservice.getPosts()
      .subscribe(
        data => this.displayPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get posts finished")
      );
  }

  onGetSpecificComments() {
    this.roservice.getSpecificComments()
      .subscribe(
        data => this.postPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get specific comments finished")
      );
  }

  onPostPosts() {
    this.roservice.postPosts({userId: '49', id: '48', title: 'new title', body: 'new body text'})
      .subscribe(
        data => this.postPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Post posts finished")
      );
  }

  onPutPosts() {
    this.roservice.putPosts({userId: '23', id: '9', title: 'new title 2', body: 'new body text 2'})
      .subscribe(
        data => this.putPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Put posts finished")
      );
  }

  onPatchPosts() {
    this.roservice.patchPosts({userId: '43', id: '12', title: 'new title 3', body: 'new body text 3'})
      .subscribe(
        data => this.patchPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Patch posts finished")
      );
  }

}
