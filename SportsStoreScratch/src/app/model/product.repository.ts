import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(
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
}
