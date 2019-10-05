import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookooPage } from './bookoo.page';

const routes: Routes =[
  {
    path: 'tabs',
    component: BookooPage,
    children: [
      {
        path: 'utama',
        children: [
          {
            path: '',
            loadChildren:'src/app/bookoo/bookoo-detail/bookoo-detail.module#BookooDetailPageModule'
          }
        ]
      },
      {
        path: 'favorit',
        children: [
          {
            path: '',
            loadChildren: 'src/app/bookoo/favorit/favorit.module#FavoritPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/bookoo/tabs/utama',
    pathMatch: 'full'
  }
  // { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class BookooRoutingModule { }
