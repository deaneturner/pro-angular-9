import { ApplicationRef, Component } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Model } from './repository.model';
import { Product } from './product.model';
import { ProductFormGroup, ProductFormControl } from './form.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent {
  model: Model = new Model();
  formGroup: ProductFormGroup = new ProductFormGroup();

  newProduct: Product = new Product();

  formSubmitted = false;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  submitForm() {
    this.addProduct(this.newProduct);
  }
}
