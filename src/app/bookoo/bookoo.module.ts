import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { BookooPage } from './bookoo.page';
import { BookooRoutingModule } from 'src/app/bookoo/bookoo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookooRoutingModule
  ],
  declarations: [BookooPage]
})
export class BookooPageModule {}
