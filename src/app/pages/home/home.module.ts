import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbCardModule, NbUserModule, NbActionsModule, NbButtonModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { articlesReducer } from 'src/reducer/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from 'src/effects/article.effect';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbUserModule,
    NbActionsModule,
    NbButtonModule,

  ],
})
export class HomeModule { }
