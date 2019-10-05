import { Component, OnInit } from '@angular/core';
import { Bookoo } from 'src/app/model/bookoo.model';
import { BookooService } from './bookoo.service';

@Component({
  selector: 'app-bookoo',
  templateUrl: './bookoo.page.html',
  styleUrls: ['./bookoo.page.scss'],
})
export class BookooPage implements OnInit {
  loadedBookoo: Bookoo[];

  constructor(private bookooService: BookooService) { }

  ngOnInit() {
    this.loadedBookoo = this.bookooService.allBookoo;
  }

}
