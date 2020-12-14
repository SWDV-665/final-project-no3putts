import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MovieService } from '../service/movie.service';
import { InputDialogService } from '../service/input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

export interface Movie {
  title: string;
  year: string;
  runtime: number;
  imdbID: string;
  director: string;
  rated: string;
  plot: string;
  genre: string;
  actors: string;
  language: string;
  poster: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page{

  title = "FlickShare";
  items: Movie[];
  movie: Movie;
  errorMessage: String;
  

  constructor(public toastController: ToastController, 
    public alertController: AlertController, 
    public dataService: MovieService, 
    public inputDialog: InputDialogService,
    public socialSharing: SocialSharing) { }
  

    async loadItems(evt) {
      const searchTerm = evt.srcElement.value;
    
      if (!searchTerm) {
        return;
      }
      this.dataService.getMovie(searchTerm).subscribe((data: Movie[])=>{
        this.items = data;
      });
      // this.items = this.foodListBackup;
      return this.items;
    }   

    async itemDetails(item, index) {
      const toast = await this.toastController.create({
        message: 'Item Details: ' + item.title,
        duration: 5000,
        position: 'bottom',
        animated: true,
        color: 'warning',
      });
      toast.present();  // displays toast
      console.log("**************** ID" + index);
      console.log(this.items[index].imdbID);
      this.dataService.getMovieDetail(this.items[index].imdbID).subscribe((data: Movie)=>{
        this.movie = data;
        this.inputDialog.moveDetail(this.movie);
      });
      
    }

  async shareItem(item, index) {
    const toast = await this.toastController.create({
      header: 'Sharing...',
      message: 'Item shared: ' + item.name,
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: 'success',
    });
    toast.present();  // displays toast 
    
    let message = "I just saw this movie: " + item.title + " and I really enjoyed watching it! " + item.poster;
    let subject = "Latest Movie I Watched";

    this.socialSharing.canShareViaEmail().then(()=>{
      this.socialSharing.share(message, subject, "www/"+item.poster).then(() => {
        console.log("Shared via email");
      }).catch((error) => {
        console.log("Share via email failed: ",error);
      });
    }).catch((error)=>{
      console.log("Cannot share via email: ", error);
    });
  }

}

