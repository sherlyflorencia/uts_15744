import { Component, OnInit } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';
import { BookooService } from '../bookoo.service';
import { FavoritService } from 'src/app/bookoo/favorit/favorit.service';
import { ModalController, IonItemSliding } from '@ionic/angular';
@Component({
  selector: 'app-bookoo-detail',
  templateUrl: './bookoo-detail.page.html',
  styleUrls: ['./bookoo-detail.page.scss'],
})
export class BookooDetailPage implements OnInit {

  loadedBookoo: Bookoo[];

  constructor(
    private bookooService: BookooService,
    private favoriteService: FavoritService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadedBookoo = this.bookooService.allBookoo;
  }
  addToFav(book: Bookoo){
    this.bookooService.addFav(book.id);
    this.favoriteService.addNewFavBook(book);
  }

}
