import { HomeComponent } from './../../../../components/home/home.component';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private articlesService: HomeService) { }

  articles: any[] = [];

  ngOnInit(): void {
    this.articlesService.getArtical(1, 10).subscribe((data) => {
      this.articles.length = 0;
      for (let article of data) {
        this.articles.push(article)
        this.articlesService.getById(article.id).subscribe((value) => {
          article['body'] = value['body_html']
        });
      }
    });
  }


}
