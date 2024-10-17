import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  private httpClient: HttpClient
  //private baseUrl: string

  constructor(client: HttpClient) {
    this.httpClient = client
   }
}
