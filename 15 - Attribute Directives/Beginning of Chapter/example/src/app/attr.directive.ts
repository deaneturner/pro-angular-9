import {
  Attribute, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit,
  Output, SimpleChange
} from '@angular/core';
import { Product } from '../../../../../SportsStoreScratch/src/app/model/product.model';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective {

  @Input('pa-attr')
  @HostBinding('class')
  bgClass: string;

  // tslint:disable-next-line:no-input-rename
  @Input('pa-product')
  product: Product;

  // tslint:disable-next-line:no-output-rename
  @Output('pa-category')
  click = new EventEmitter<string>();

  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }

  constructor(private element: ElementRef, @Attribute('pa-attr') bgClass: string) {
  }
}
