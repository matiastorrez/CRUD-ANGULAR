import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  createProductForm = this.fb.group({
    name: [
      '',
      [Validators.pattern('^[a-zA-Z0-9]{3,16}$'), Validators.required],
    ],
    price: [0, [Validators.required]],
  });

  ngOnInit(): void {}

  onSubmit(): void {
    let newProductDTO: CreateProductDTO = {
      name: this.createProductForm.get('name')?.value || '',
      price: this.createProductForm.get('price')?.value || 0,
    };

    this.createProduct(newProductDTO);
  }

  createProduct(newProductDTO: CreateProductDTO) {
    if (this.createProductForm.valid) {
      this.productService.createProduct(newProductDTO).subscribe(() => {
        this.resetForm();
      });
      this.success = 'Completado correctamente';
    } else {
      this.createProductForm.markAllAsTouched();
    }
  }

  onBack() {
    this.router.navigate(['/products']);
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
