import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article, ArticlesState } from 'src/states/article.state';
import { Store } from '@ngrx/store';
import * as ArticleActions from 'src/actions/article.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
    articles$: Observable<Article[]>;
    constructor(private store: Store<{ articles:ArticlesState}>){
      this.articles$=this.store.select((state)=>state.articles.list)
    }
  ngOnInit(): void {
    this.store.dispatch(ArticleActions.getPaginate({
      page: 1,
      perPage:10,
    }));
  }
    title = 'ngrx';

    loadArticles(){

    }


  // public flipped: boolean = false;

  // public toggleFlip() {
  //   this.flipped = !this.flipped
  // }
  // constructor(private HomeService: HomeService, private router: Router) {

  // }

  // articles: any[] = [];
  // ngOnInit(): void {

  //   this.HomeService.getArtical(1, 10).subscribe((data) => {
  //     this.articles.length = 0;
  //     for (let article of data) {
  //       this.articles.push(article)
  //       this.HomeService.getById(article.id).subscribe((value) => {

  //         article['body'] = value['body_html']
  //       });
  //     }
  //   });
  //   // this.HomeService.getArtical(1,20).subscribe((data)=>{
  //   //   this.articles.length = 0;
  //   //   for(let article of data){
  //   //     this.articles.push(article);
  //   //     console.log(this.articles);
  //   //   }
  //   // });
  // }
  // toLink() {
  //   this.router.navigate(['/home/news']);
  // }
}
