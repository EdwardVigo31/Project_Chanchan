import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product[]=[
    new Product(1,'Extranjero',15),
    new Product(2,'Adulto',10),
    new Product(3,'Escolar',1)
  ];

  constructor() { }
  
  getProducts():Product[]{
    return this.product;
  }
}
