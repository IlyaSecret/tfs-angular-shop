import {Component, Input} from '@angular/core';
import {IPurchase} from "../../../shared/models/IPurchase";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../../../shared/services/cart.service";
import {CurrencyService} from "../../../shared/services/currency.service";
import {SummaryService} from "../../../shared/services/summary.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent{
  @Input() purchase!: IPurchase;
  readonly form: FormGroup = new FormGroup({
    count: new FormControl(1, Validators.required)
  });

  constructor(private readonly cartService: CartService, private readonly currencyService: CurrencyService, private readonly summarySerivce: SummaryService) {
  }

  addItemToCart(): void {
    this.cartService.addToCart(this.purchase, this.form.get('count')?.value)
    this.summarySerivce.updateSumm(this.currencyService.coefficient, this.cartService.cartPurchases);
  }
}
