import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cart-detail-component/cart-detail-component.component';
import { CheckoutComponent } from './checkout-component/checkout-component.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  exports: [StoreComponent, CartSummaryComponent]
})
export class StoreModule {}
