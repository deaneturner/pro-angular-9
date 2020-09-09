import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductRepository } from '../../model/product.repository';
import { ActivatedRoute } from '@angular/router';
import { ProductFormGroup } from '../../model/product.form.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  editing = false;
  product = new Product();
  selectedProduct: string;

  constructor(private productRepository: ProductRepository, activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
  }

  ngOnInit(): void {
  }

  getProducts(category?: string): Product[] {
    return this.productRepository.getProducts(category);
  }

  deleteProduct(id: number) {
    this.productRepository.deleteProduct(id);
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }
}
