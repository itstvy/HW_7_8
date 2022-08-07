import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getArtical(page: number, per_page: number): Observable<any>{
    let resultPage = this.http.get(`https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${per_page}`);
    // resultPage.subscribe((response)=>{console.log(response);});
    return resultPage;
  }

  getById(id: number) : Observable <any> {
    let resultObservable = this.http.get(`https://social.runwayclub.dev/api/articles/${id}`);
    return resultObservable;
  }
}
