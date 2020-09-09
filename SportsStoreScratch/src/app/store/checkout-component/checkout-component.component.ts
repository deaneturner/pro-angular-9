import { Component, OnInit } from '@angular/core';
import { Order } from '../../model/order.model';
import { NgForm } from '@angular/forms';
import { OrderRepository } from '../../model/order.repository';

@Component({
  selector: 'app-checkout-component',
  templateUrl: './checkout-component.component.html',
  styleUrls: ['./checkout-component.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSent = false;
  submitted = false;

  constructor(public order: Order, private orderRepository: OrderRepository) {
  }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepository.saveOrders(this.order)
        .subscribe(() => {
          this.order.clear();
          this.submitted = false;
          this.orderSent = true;
        });
    }
    return true;
  }
}
