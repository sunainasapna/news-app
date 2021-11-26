import { Injectable, TemplateRef } from '@angular/core';
import { HttpClient, HttpHeaders} from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  fetchNews() {
    console.log("fetching news");
    const url = "https://newsapi.org/v2/top-headlines/sources?apiKey=2fef62489f3945319d081cd460944147";
    let promise = new Promise((resolve, reject) => {
    this.http.get<any[]>(url).subscribe((res: any) => {
      console.log("data cme ==> ",res);
      resolve(res);
        });
    });
    return promise;

  }


}
