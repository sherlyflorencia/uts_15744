import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bookoo', pathMatch: 'full' },
  { path: 'bookoo', loadChildren: './bookoo/bookoo.module#BookooPageModule' },
  { path: 'bookoo-detail', loadChildren: './bookoo/bookoo-detail/bookoo-detail.module#BookooDetailPageModule' },
  { path: 'favorit', loadChildren: './bookoo/favorit/favorit.module#FavoritPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
