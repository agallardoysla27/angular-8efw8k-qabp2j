import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CartService {

  items = [];

  addToCart(product) {
    this.items.push(product);
    window.alert(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  } 

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  
  constructor(
    private http: HttpClient
  ) { }

}