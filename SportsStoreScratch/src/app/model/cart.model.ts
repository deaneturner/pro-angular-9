import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class CartModel {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  constructor() {
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(line => {
      this.itemCount += line.quantity;
      this.cartPrice += (line.quantity * line.product.price);
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {
  }

  getLineTotal() {
    return this.product.price * this.quantity;
  }
}
