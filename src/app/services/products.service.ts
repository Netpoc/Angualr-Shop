import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  
  constructor(
    private http: HttpClient
  ) { }
  
  getProducts() {
    return this.http.get('https://dummyjson.com/products')
  }

  getProductsDetails(id: Number): Observable <any> {
    
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}


 
