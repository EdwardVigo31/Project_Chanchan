import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-lis',
  templateUrl: './product-lis.component.html',
  styleUrls: ['./product-lis.component.css']
})
export class ProductLisComponent implements OnInit{

  product: Product[]=[];

  constructor(
    private productService:ProductService
  ){}

  ngOnInit(): void {
    this.loadProduct();
    
  }
  loadProduct(): void{
    this.product=this.productService.getProducts();
  }

}
