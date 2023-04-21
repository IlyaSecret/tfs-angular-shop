import {Component} from '@angular/core';
import {CurrencyService} from "../../../shared/services/currency.service";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {
  constructor(readonly currencyService: CurrencyService) {}
}
