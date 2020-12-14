import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class MovieService {

  baseUrl = "https://flick-share-api.herokuapp.com/api/movie/";
  urlParam = "?source=omdb";

  herokuUrl = "https://flick-share-api.herokuapp.com";

  constructor(private http: HttpClient) {}

  getMovie(title: string){
    return this.http.get(this.baseUrl + "title/" + title + this.urlParam);
  }

  getMovieDetail(id: string){
    return this.http.get(this.baseUrl + id + this.urlParam);
  }

  editMovie(item){
    let url = this.herokuUrl+'/api/movie/'+item._id;
    console.log("EDITING ITEM: " + item.name);
    console.log(url);
    this.http.put(url, item);
    // .subscribe(
    //   res => {
    //     this.items= <any> res;
    //     this.dataChangeSubject.next(true);
    //   });
    console.log("EDITED ITEM: " + item.name);
  }

  addMovie(item){
    console.log('Adding item::' + item.imdbID);
    this.http.post(this.herokuUrl + '/api/movie/' + item.imdbID + '/mobileuser', item.imdbID)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });

  }

}
