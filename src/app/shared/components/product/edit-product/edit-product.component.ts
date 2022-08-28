import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, UpdateProductDTO } from '@data/interfaces/product';
import { ProductService } from '@data/services/api/product/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  id: number = 0;
  product: Product = { id: 0, name: '', price: 0 };
  success!: string;
  error!: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getProduct();
    });
  }

  onSubmit(productDTO: UpdateProductDTO): void {
    this.editProduct(productDTO);
  }

  editProduct(updateProductDTO: UpdateProductDTO) {
    this.productService
      .updateProduct(this.product.id, updateProductDTO)
      .subscribe(() => {
        this.success = 'Editado correctamente';
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
