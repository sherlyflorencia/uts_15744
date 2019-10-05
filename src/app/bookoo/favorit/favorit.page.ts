import { Component, OnInit } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';
import { MenuController } from '@ionic/angular';
import { FavoritService } from 'src/app/bookoo/favorit/favorit.service';
import { AlertController } from '@ionic/angular';
import { BookooService } from '../bookoo.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {

  faveBook: Bookoo[] = [];

  constructor(
    public menuCtrl: MenuController,
    public favoritSvc: FavoritService,
    public alertCtrl: AlertController,
    public bookooSvc: BookooService,
  ) { }

  ngOnInit() {
    this.faveBook = this.favoritSvc.getAllFavorite();
  }

  ionViewWillEnter(){
    this.faveBook = this.favoritSvc.getAllFavorite();
  }

  hapus(id:string){
    this.presentDeleteAlert(id);
  }


  async presentDeleteAlert(id: string){
    const alert  = await this.alertCtrl.create({
      header: 'Delete',
      subHeader: 'Yakin Mau Hapus ini dari Favorite?',
      buttons: [
        {
          text:'Gak Jadi',
          role: 'cancel'
        },
        {
          text: 'Yakin',
          handler: () =>{
            this.favoritSvc.deleteFavorite(id);
            this.faveBook = this.favoritSvc.getAllFavorite();
          }
        }
      ]
    });
    await alert.present();
  }
  delete(id: string){

  }
}
