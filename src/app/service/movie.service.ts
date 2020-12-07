import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  baseUrl = "https://gateway.maverik.com/movie/api/movie/";
  urlParam = "?source=omdb";

  constructor(private http: HttpClient) {}

  getMovie(title: string){
    return this.http.get(this.baseUrl + "title/" + title + this.urlParam);
  }

  getMovieDetail(id: string){
    return this.http.get(this.baseUrl + id + this.urlParam);
  }

}
