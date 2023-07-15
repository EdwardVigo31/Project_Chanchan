
import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class StoregeService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItemModel[] {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      try {
        return JSON.parse(cartData);
      } catch (error) {
        console.error('Error parsing cart data:', error);
      }
    }
    return []; // Devuelve un carrito vacío en caso de error o si no hay datos en localStorage
  }

  clear(): void {
    localStorage.removeItem('cart');
  }
}