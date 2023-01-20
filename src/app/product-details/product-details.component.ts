import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService} from '../services/cart.service';
import { Product } from "../product-list/product-list.component";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  addToCart(product: Product ) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart!');
  }
 
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
  this.getProductsId(param.id)    
    })
    
  }
  private getProductsId(id: Number) {
    this.productService.getProductsDetails(id).subscribe((res: any) => {
      this.product = res;
    } )
  }

}

