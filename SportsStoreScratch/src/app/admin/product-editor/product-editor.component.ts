import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductRepository } from '../../model/product.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from '../../model/product.form.model';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {
  editing = false;
  product = new Product();
  formGroup = new ProductFormGroup();
  formSubmitted = false;

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

  submitForm() {
    Object.keys(this.formGroup.controls).forEach(c => this.product[c] = this.formGroup.controls[c].value);
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      this.addProduct(this.product);
      this.product = new Product();
      this.formGroup.reset();
      this.formSubmitted = false;
      this.router.navigateByUrl('/admin/main/products');
    }
  }

  addProduct(product: Product) {
    this.productRepository.saveProduct(product);
  }
}
