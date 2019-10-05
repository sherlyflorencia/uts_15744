import { Component, OnInit } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';
import { BookooService } from '../bookoo.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bookoo-detail',
  templateUrl: './bookoo-detail.page.html',
  styleUrls: ['./bookoo-detail.page.scss'],
})
export class BookooDetailPage implements OnInit {

  loadedBookoo: Bookoo[];

  constructor(private bookooService: BookooService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadedBookoo = this.bookooService.allBookoo;
  }

}
