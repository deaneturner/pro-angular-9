import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { StaticDataSource } from './static.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository {
  private orders: Order[];

  constructor(private staticDataSource: StaticDataSource) {
  }

  getOrders(): Order[] {
    return this.orders;
  }

  saveOrders(order: Order): Observable<Order> {
    return this.staticDataSource.saveOrder(order);
  }
}
