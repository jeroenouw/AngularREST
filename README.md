[![demolive](https://img.shields.io/badge/demo-live-green.svg)](http://angularrest.jerouw.nl/)
[![license](https://img.shields.io/npm/l/express.svg)](https://github.com/jeroenouw/AngularREST/blob/master/LICENSE/)

![logo](https://jerouw.nl/wp-content/uploads/2017/07/angularrxjsrest.png "Logo") 

# Angular REST API example with observables

An [Angular 4](https://angular.io) application showing how to use a [REST(Restful)](https://en.wikipedia.org/wiki/Representational_state_transfer) [API](https://en.wikipedia.org/wiki/Application_programming_interface) with [observables](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html).  
Includes Angular v5.0.0-beta.0 (v4.3.2) with new HttpClient.

## Framework, Layout and data
* Framework: [Angular 4](https://angular.io) - Angular is a framework for building client applications in HTML and TypeScript that compiles to JavaScript.
* Layout: [Material](https://material.io/) - Material Design is a unified system that combines theory, resources, and tools for crafting digital experiences.
* Data: [JSON Placeholder](https://jsonplaceholder.typicode.com/) - Fake Online REST API for Testing and Prototyping.

## REST API
A [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API is a web service implemented using HTTP and the principles of REST. It is a collection of resources, with four defined aspects:

* The base URI for the web service, such as `example.com/resources/`
* The Internet media type of the data supported by the web service. This is often JSON, XML or YAML but can be any other valid Internet media type.
* The set of operations supported by the web service using HTTP methods (e.g., POST, GET, PUT, PATCH or DELETE).
* The API must be hypertext driven.

## RxJS Observables
The Reactive Extensions for JavaScript ([RxJS](https://github.com/Reactive-Extensions/RxJS)) is a set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators that many of you already know by Array in JavaScript. Using RxJS, developers represent asynchronous data streams with Observables, query asynchronous data streams using many operators, and parameterize the concurrency in the asynchronous data streams using Schedulers. Simply put, RxJS = Observables + Operators + Schedulers.  

Whether you are authoring a web-based application in JavaScript or a server-side application in Node.js, you have to deal with asynchronous and event-based programming. Although some patterns are emerging such as the Promise pattern, handling exceptions, cancellation, and synchronization is difficult and error-prone.

### RxJS usage
* Observable
* Observable/throw
* Operator/catch
* Operator/map (Not anymore with HttpClient v4.3.2)

Due the RxJS library size, it is necessary to import only the operators you need. Otherwise the launch time of your application will be longer.
