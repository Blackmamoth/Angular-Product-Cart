import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/Product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  @ViewChild('productName', { static: true }) productName: ElementRef;
  @ViewChild('productPrice', { static: true }) productPrice: ElementRef;
  @ViewChild('productImage', { static: true }) productImgSrc: ElementRef;

  ngOnInit(): void {
  }

  onSubmit() {
    const name = this.productName.nativeElement.value;
    const price = this.productPrice.nativeElement.value;
    const imgSrc = this.productImgSrc.nativeElement.value;

    if (!name || !price || !imgSrc) {
      alert('Please add all fields');
      return;
    }

    const product: Product = {
      name: name,
      price: price,
      imgSrc: imgSrc,
      inCart: false,
    }
    this.productService.addProduct(product).subscribe()
    this.router.navigate([''])
  }

}
