import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from '@data/interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL: string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.URL + '/' + id);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.URL + '/' + id);
  }

  createProduct(dto: CreateProductDTO): Observable<CreateProductDTO> {
    return this.http.post<CreateProductDTO>(this.URL, dto);
  }

  updateProduct(id: number, dto: UpdateProductDTO): Observable<Product> {
    return this.http.put<Product>(this.URL + '/' + id, dto);
  }
}
