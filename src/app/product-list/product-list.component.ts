import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  Products:any = [];

  share(){
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    
  }

  public getProduct(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.Products = res.products;
      console.log(res.products);
    })
  }
  

}
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
