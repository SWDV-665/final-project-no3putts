import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public dataService: MovieService, public alertController: AlertController) { }

  async moveDetail(item) {
    const alert = await this.alertController.create({
      header: item.title,
      inputs: [
        {
          name: 'rated',
          placeholder: 'Rated',
          value: item.rated,
          disabled: true,
        },
        {
          name: 'year',
          placeholder: 'Year',
          value: item.year,
          disabled: true, 
        },
        {
          name: 'language',
          placeholder: 'Language',
          value: item.language,
          disabled: true, 
        },
        {
          name: 'genre',
          placeholder: 'Genre',
          value: item.genre,
          disabled: true, 
        },
        {
          name: 'director',
          placeholder: 'Director',
          value: item.director,
          disabled: true, 
        },
        {
          name: 'runtime',
          placeholder: 'Runtime',
          value: item.runtime,
          disabled: true, 
        },
      
      ],
      message: item.plot + '<br><br>Actors: ' + item.actors,
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Done item detail');
          }
        }
      ]
    });

   await alert.present(); // Present Alert
  }

}
