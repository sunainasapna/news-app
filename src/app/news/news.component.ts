import { Component, OnInit } from '@angular/core';
import { NewsService} from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public newsList:any=[];
  public countryList:any=[];
  public selectedNewsList:any=[];
  public selectedCounty:string = '';
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    console.log("hello world");
    this.getNews();
  }

  getNews() {
    console.log("getting news from api");
    this.newsService.fetchNews().then((data:any) => {
      if(data.status) {
        this.newsList = data.sources;
        console.log("news ==>",this.newsList)
        this.newsList.forEach((val:any, key:number) => {
          this.countryList.push(val.country);
        })

        console.log("countries ==> ",this.countryList)
      }
    });
  }

  selectNews() {

  }

}
