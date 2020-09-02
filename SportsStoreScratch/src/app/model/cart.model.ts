import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice = 0;

  constructor() {
  }

  addLine(product: Product, quantity = 1) {
    const line = this.lines.find((l) => product.id === l.product.id);

    if (line) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }

    this.recalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.lines.find((l) => product.id === l.product.id);
    if (line) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(product: Product) {
    const lineIndex = this.lines.findIndex((l) => product.id === l.product.id);
      this.lines.splice(lineIndex, 1);
      this.recalculate();
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
