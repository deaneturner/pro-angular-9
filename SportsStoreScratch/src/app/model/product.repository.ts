import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private restDataSource: RestDataSource) {
    restDataSource.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.categories = data.map((product) => product.category)
          .filter((category, index, array) => array.indexOf(category) === index)
          .sort();
      }
    );
  }

  getProduct(id: number): Product {
    return this.products.find((product) => id === product.id);
  }

  getProducts(category: string = null): Product[] {
    return this.products.filter(product => category == null || category === product.category);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id === null || product.id === 0) {
      this.restDataSource.saveProduct(product)
        .subscribe((p) => {
          this.products.push(p);
        });
    } else {
      this.restDataSource.updateProduct(product)
        .subscribe((p) => {
          this.products.splice(this.products
            .findIndex((prod) => prod.id === product.id), 1, product);
        });
    }
  }

  deleteProduct(id: number) {
    this.restDataSource.deleteProduct(id)
      .subscribe((p) => {
        this.products.splice(
          this.products.findIndex((prod) => prod.id === id, 1)
        );
      });
  }
}
