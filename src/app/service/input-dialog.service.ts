import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public dataService: MovieService, public alertController: AlertController) { }

  async moveDetail(movie,index?) {
    console.log("ADDING: " + movie);
    const alert = await this.alertController.create({
      header: movie.title,
      message: movie.plot + 
               '<br><br><img src=' + movie.poster + ' style="height:10%;width: 10%">' +
               '<br><br><div class="card-detail">Actors: ' + movie.actors + 
               '<br><br>Director: ' + movie.director +
               '<br><br>Rating: ' + movie.rated +
               '<br><br>Year: ' + movie.year +
               '<br><br>Genre: ' + movie.genre +
               '<br><br>Year: ' + movie.year +
               '<br><br>Language: ' + movie.language +
               '<br><br>Runtim : ' + movie.runtime + '</div>',
      inputs: [
        {
          name: '_id',
          placeholder: '_id',
          value: movie.imdbID,
          disabled: true,
        },
      ],
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Done item detail');
          },
        },
        {
          text: movie ? 'Save' : 'Add',
          handler: () => {
              console.log("ADDING: " + movie.imdbID);
              this.dataService.addMovie(movie);
          }
        }
      ]
    });

   await alert.present(); // Present Alert
  }

}
