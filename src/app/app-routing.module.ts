import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'news', loadChildren: () => import('./pages/home/pages/news/news.module').then(m => m.NewsModule) }, { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }, { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, { path: 'news', loadChildren: () => import('./pages/home/pages/news/news.module').then(m => m.NewsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
