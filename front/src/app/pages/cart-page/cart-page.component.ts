import {Component} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(public readonly cartService: CartService) {
  }
}
