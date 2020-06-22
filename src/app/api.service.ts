import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=b7ac13f31cd54efbb707a20aaeb5ea5f')
  }
}

