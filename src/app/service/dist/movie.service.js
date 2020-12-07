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
        this.baseUrl = "https://gateway.maverik.com/movie/api/movie/";
        this.urlParam = "?source=omdb";
    }
    MovieService.prototype.getMovie = function (title) {
        return this.http.get(this.baseUrl + "title/" + title + this.urlParam);
    };
    MovieService.prototype.getMovieDetail = function (id) {
        return this.http.get(this.baseUrl + id + this.urlParam);
    };
    MovieService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
