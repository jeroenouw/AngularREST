import { Component, OnInit } from '@angular/core';
import { RestObservableService } from './rest-observable.service';

@Component({
  selector: 'app-rest-observable',
  templateUrl: './rest-observable.component.html'
})
export class RestObservableComponent implements OnInit {
  displayData: string;
  errorMessage: string;

  constructor(private roservice: RestObservableService) { }

  ngOnInit() {
  }

  onGetPosts() {
    this.roservice.getPosts()
      .subscribe(
        data => this.displayData = JSON.stringify(data),
        error => this.errorMessage = <any>error,
        () => console.log("Get posts finished")
      );
  }

}
