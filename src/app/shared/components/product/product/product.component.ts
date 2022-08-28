import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '@data/interfaces/product';
import { ProductService } from '@data/services/api/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = { id: 0, name: '', price: 0 };

  @Output() refreshProducts = new EventEmitter();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  deleteProduct(): void {
    this.productService
      .deleteProduct(this.product.id)
      .subscribe(() => this.refreshProducts.emit());
  }



  getProduct() {
    this.productService.getProduct(this.product.id).subscribe((data) => {
      this.product = data;
    });
  }
}
