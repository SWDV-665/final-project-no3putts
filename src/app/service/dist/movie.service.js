"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieService = void 0;
var core_1 = require("@angular/core");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = "https://flick-share-api.herokuapp.com/api/movie/";
        this.urlParam = "?source=omdb";
        this.herokuUrl = "https://flick-share-api.herokuapp.com";
    }
    MovieService.prototype.getMovie = function (title) {
        return this.http.get(this.baseUrl + "title/" + title + this.urlParam);
    };
    MovieService.prototype.getMovieDetail = function (id) {
        return this.http.get(this.baseUrl + id + this.urlParam);
    };
    MovieService.prototype.editMovie = function (item) {
        var url = this.herokuUrl + '/api/movie/' + item._id;
        console.log("EDITING ITEM: " + item.name);
        console.log(url);
        this.http.put(url, item);
        // .subscribe(
        //   res => {
        //     this.items= <any> res;
        //     this.dataChangeSubject.next(true);
        //   });
        console.log("EDITED ITEM: " + item.name);
    };
    MovieService.prototype.addMovie = function (item) {
        console.log('Adding item::' + item.imdbID);
        this.http.post(this.herokuUrl + '/api/movie/' + item.imdbID + '/mobileuser', item.imdbID)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    MovieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
