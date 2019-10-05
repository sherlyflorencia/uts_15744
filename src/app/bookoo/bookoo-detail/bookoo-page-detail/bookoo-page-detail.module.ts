import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookooPageDetailPage } from './bookoo-page-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BookooPageDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookooPageDetailPage]
})
export class BookooPageDetailPageModule {}
