import { Component, OnInit } from '@angular/core';
import { RestObservableService } from './rest-observable.service';

@Component({
  selector: 'app-rest-observable',
  templateUrl: './rest-observable.component.html'
})
export class RestObservableComponent implements OnInit {
  getPosts: string;
  getComments: string;
  getUsers: string;
  getUsersPosts: string;
  postPosts: string;
  putPosts: string;
  patchPosts: string;
  deletePosts: string;

  errorMessage: string;

  constructor(private roservice: RestObservableService) { }

  ngOnInit() {
  }

  // GET
  onGetPosts() {
    this.roservice.getPosts()
      .subscribe(
        data => this.getPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get posts finished")
      );
  }
    
  onGetSpecificComments() {
    this.roservice.getSpecificComments()
      .subscribe(
        data => this.getComments = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get specific comments finished")
      );
  }
    
  onGetUsers() {
    this.roservice.getUsers()
      .subscribe(
        data => this.getUsers = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get users finished")
      );
  }
    
  onGetUsersPosts() {
    this.roservice.getUsersPosts()
      .subscribe(
        data => this.getUsersPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get users' posts finished")
      );
  }

  // POST
  onPostPosts() {
    this.roservice.postPosts({userId: '49', id: '48', title: 'new title', body: 'new body text'})
      .subscribe(
        data => this.postPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Post posts finished")
      );
  }

  // PUT
  onPutPosts() {
    this.roservice.putPosts({userId: '23', id: '9', title: 'new title 2', body: 'new body text 2'})
      .subscribe(
        data => this.putPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Put posts finished")
      );
  }

  // PATCH
  onPatchPosts() {
    this.roservice.patchPosts({userId: '43', id: '12', title: 'new title 3', body: 'new body text 3'})
      .subscribe(
        data => this.patchPosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Patch posts finished")
      );
  }

  // DELETE
  onDeletePosts() {
    this.roservice.deletePosts()
      .subscribe(
        data => this.deletePosts = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Delete post finished")
      );
  }

}
