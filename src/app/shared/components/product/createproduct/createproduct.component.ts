import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateProductDTO } from '@data/interfaces/product';
import { ProductService } from '@data/services/api/product/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss'],
})
export class CreateproductComponent implements OnInit {
  success!: string;
  error!: string;
  createProductForm!: FormGroup;

  createProductDTO: CreateProductDTO = {
    name: '',
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    if (this.createProductForm.valid) {
      this.createProduct();
    } else {
      this.createProductForm.markAllAsTouched();
    }
  }

  createProduct() {
    this.createProductDTO = this.createProductForm.value;
    this.productService.createProduct(this.createProductDTO).subscribe(() => {
      this.resetForm();
      this.error = '';
      this.success = 'Completado correctamente';
    });
  }

  onBack() {
    this.router.navigate(['/products']);
  }

  initForm(): void {
    this.createProductForm = this.fb.nonNullable.group({
      name: [
        '',
        [Validators.pattern('^[a-zA-Z0-9]{3,16}$'), Validators.required],
      ],
      price: [0, [Validators.required]],
    });
  }

  isInvalidField(name: string): boolean {
    const fieldName = this.createProductForm.get(name);
    if (fieldName) {
      return fieldName?.invalid && fieldName?.touched;
    } else {
      return false;
    }
  }

  isValidField(name: string): boolean {
    const fieldName = this.createProductForm.get(name);
    if (fieldName) {
      return fieldName?.valid && fieldName?.touched;
    } else {
      return false;
    }
  }

  private resetForm(): void {
    this.createProductForm.reset();
  }
}
