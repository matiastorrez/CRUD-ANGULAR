import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  success!: string;
  error!: string;
  editProductForm!: FormGroup;

  updateProductDTO: UpdateProductDTO = {
    name: '',
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getProduct();
    });
  }

  onSubmit(): void {
    if (this.editProductForm.valid) {
      this.editProduct();
    } else {
      this.editProductForm.markAllAsTouched();
    }
  }

  initForm(): void {
    this.editProductForm = this.fb.nonNullable.group({
      name: [
        '',
        [Validators.pattern('^[a-zA-Z0-9]{3,16}$'), Validators.required],
      ],
      price: [0, [Validators.required]],
    });
  }

  editProduct() {
    this.updateProductDTO = this.editProductForm.value;
    this.productService
      .updateProduct(this.id, this.updateProductDTO)
      .subscribe(() => {
        this.success = 'Editado correctamente';
      });
  }

  getProduct() {
    this.productService.getProduct(this.id).subscribe((data) => {
      this.editProductForm.patchValue(data);
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }

  isInvalidField(name: string): boolean {
    const fieldName = this.editProductForm.get(name);
    if (fieldName) {
      return fieldName?.invalid && fieldName?.touched;
    } else {
      return false;
    }
  }

  isValidField(name: string): boolean {
    const fieldName = this.editProductForm.get(name);
    if (fieldName) {
      return fieldName?.valid && fieldName?.touched;
    } else {
      return false;
    }
  }
}
