import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    product.inCart = !product.inCart;
    this.productService.addToCart(product).subscribe();
  }

}
