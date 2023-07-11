import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  static readonly URL_API_PERROS = "https://dog.ceo/api/breeds/image/random";

  constructor(private httpClient:HttpClient) {
    
  }

  getPerroAleatorio(): Observable<PerroWeb>{
    // entre <> indico el tipo de dato recibido
    return this.httpClient.get<PerroWeb>(PerroService.URL_API_PERROS);
  }
}
