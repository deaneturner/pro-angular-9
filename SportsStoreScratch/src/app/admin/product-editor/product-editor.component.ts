import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductRepository } from '../../model/product.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  editing = false;
  product = new Product();

  constructor(
      private productRepository: ProductRepository,
      activeRoute: ActivatedRoute,
      private router: Router) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    if (this.editing) {
      Object.assign(this.product, this.productRepository.getProduct(Number(activeRoute.snapshot.params['id'])));
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    this.productRepository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
