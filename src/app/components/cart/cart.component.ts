import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/Product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart: Product[];

  @ViewChild('alertBox', { static: true }) alertBox: ElementRef;

  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.productsInCart = products.filter(product => product.inCart)
    })
  }

  checkoutProduct(productInCart: Product) {
    productInCart.inCart = !productInCart.inCart
    this.productService.addToCart(productInCart).subscribe();
    this.productsInCart = this.productsInCart.filter(product => product.id !== productInCart.id)
    this.alertBox.nativeElement.style.visibility = 'visible'
    setTimeout(() => {
      this.alertBox.nativeElement.style.visibility = 'hidden'
    }, 4000)
  }

}
