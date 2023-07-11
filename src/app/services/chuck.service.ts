import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckPhrase } from '../models/chuck-phrase';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  static readonly URL_API_CHUCKNORRIS = "https://api.chucknorris.io/jokes/random";

  constructor(private httpClient:HttpClient){
    
  }
  
  getRandomPhrase(): Observable<ChuckPhrase> {
    return this.httpClient.get<ChuckPhrase>(ChuckService.URL_API_CHUCKNORRIS);
  }
}