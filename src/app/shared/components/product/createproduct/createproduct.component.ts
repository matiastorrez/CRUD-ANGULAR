import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductDTO } from '@data/interfaces/product';
import { ProductService } from '@data/services/api/product/product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss'],
})
export class CreateproductComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  success!: string;
  error!: string;

  ngOnInit(): void {}

  onSubmit(productDTO: CreateProductDTO): void {
    console.log(productDTO);
    this.createProduct(productDTO);
  }

  createProduct(newProductDTO: CreateProductDTO) {
    console.log(newProductDTO);
    this.productService.createProduct(newProductDTO).subscribe();
    this.success = "Completado correctamente"
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
