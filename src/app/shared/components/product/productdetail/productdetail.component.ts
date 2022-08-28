import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@data/interfaces/product';
import { ProductService } from '@data/services/api/product/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  id: number = 0;

  product: Product = { id: 0, name: '', price: 0 };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });

    this.getProduct();
  }

  deleteProduct(): void {
    this.productService
      .deleteProduct(this.product.id)
      .subscribe(() => {
        this.onBack();
      });
  }

  getProduct() {
    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data;
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
