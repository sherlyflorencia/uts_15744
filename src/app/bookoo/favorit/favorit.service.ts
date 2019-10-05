import { Injectable } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {
  favBook: Bookoo[]= []

  constructor() { }

  addNewFavBook(newFav: Bookoo){
    this.favBook.push(newFav);
    console.log(this.favBook);
  }
  deleteFavorite(id: String){
    this.favBook = this.favBook.filter( fav =>{
      return fav.id !== id;
    })
    return this.favBook;
  }
  getAllFavorite(){
    return this.favBook;
  }

}
