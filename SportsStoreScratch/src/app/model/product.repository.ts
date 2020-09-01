import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';

export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
  }

  getProduct(id: number): Product {
    return this.products.find((product) => id === product.id );
  }

  getCategories(): string[] {
    return this.categories;
  }
}
