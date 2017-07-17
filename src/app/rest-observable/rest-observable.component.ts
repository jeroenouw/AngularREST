import { Component, OnInit } from '@angular/core';
import { RestObservableService } from './rest-observable.service';

@Component({
  selector: 'app-rest-observable',
  templateUrl: './rest-observable.component.html'
})
export class RestObservableComponent implements OnInit {
  displayPosts: string;
  displayComments: string;

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
        data => this.displayComments = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get specific comments finished")
      );
  }

  onPostPosts() {
    this.roservice.postPosts({ userId: '49', id: '48', title: 'new title', body: 'new body text'})
      .subscribe(
        data => this.displayComments = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Post posts finished")
      );
  }

}
