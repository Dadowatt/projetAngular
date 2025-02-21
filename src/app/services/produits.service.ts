import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private urlApi = 'https://fakestoreapi.com/products'
  constructor(
    private http:HttpClient
  ) { }

  getproducts(){
    return this.http.get(this.urlApi)
  }
  tester(){
    
  }
}

