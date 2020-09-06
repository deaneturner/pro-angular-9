import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class OrderRepository {
  private orders: Order[];
  private loaded = false;

  constructor(private restDataSource: RestDataSource) {
  }

  loadOrders() {
      this.restDataSource.getOrders()
        .subscribe((orders) => {
          this.orders = orders;
          this.loaded = true;
        });
  }
  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  saveOrders(order: Order): Observable<Order> {
    return this.restDataSource.saveOrder(order);
  }

  saveOrder(order: Order) {
    if (order.id === null || order.id === 0) {
      this.restDataSource.saveOrder(order)
        .subscribe((p) => {
          this.orders.push(p);
        });
    } else {
      this.restDataSource.updateOrder(order)
        .subscribe((p) => {
          this.orders.splice(this.orders
            .findIndex((p) => p.id === order.id), 1, order);
        });
    }
  }

  deleteOrder(id: number) {
    this.restDataSource.deleteOrder(id)
      .subscribe((p) => {
        this.orders.splice(
          this.orders.findIndex((p) => p.id === id, 1)
        );
      });
  }
}
