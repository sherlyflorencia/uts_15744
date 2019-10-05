import { Component, OnInit } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';
import { BookooService } from '../../bookoo.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookoo-page-detail',
  templateUrl: './bookoo-page-detail.page.html',
  styleUrls: ['./bookoo-page-detail.page.scss'],
})
export class BookooPageDetailPage implements OnInit {
  id;
  loadedBookoo: Bookoo;

  constructor(public alertController: AlertController, private activatedRoute: ActivatedRoute, private bookooSvc: BookooService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( param => {
      this.id = param.get('bookooId');
      this.loadedBookoo = this.bookooSvc.getBookoo(this.id);
    })
  }
}

