import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  includeShipped = false;

  constructor(private orderRepository: OrderRepository) {
  }

  ngOnInit(): void {
  }

  getOrders(): Order[] {
    return this.orderRepository.getOrders()
      .filter((order) => this.includeShipped || !order.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.orderRepository.updateOrder(order);
  }

  delete(id: number) {
    this.orderRepository.deleteOrder(id);
  }
}
