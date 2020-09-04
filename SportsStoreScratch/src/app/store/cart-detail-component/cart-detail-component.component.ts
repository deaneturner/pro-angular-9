import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'app-cart-detail-component',
  templateUrl: './cart-detail-component.component.html',
  styleUrls: ['./cart-detail-component.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) {
  }

  ngOnInit(): void {
  }

}
