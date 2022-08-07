import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbButtonModule, NbMenuModule, NbCardModule, NbUserModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { articlesReducer } from 'src/reducer/article.reducer';
import { ArticleEffects } from 'src/effects/article.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    HttpClientModule,
    NbUserModule,
    NbIconModule,
    StoreModule.forRoot(
      {
        articles: articlesReducer,

      },
      {}
    ),
    EffectsModule.forRoot([
     ArticleEffects,
    ])
  ],
    // NbCardModule

  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
