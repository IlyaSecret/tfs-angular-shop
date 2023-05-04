import {Component, Input, OnInit, Output} from '@angular/core';
import {ICartItem} from "../../../shared/models/ICartItem";
import {CartService} from "../../../shared/services/cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CurrencyService} from "../../../shared/services/currency.service";
import {SummaryService} from "../../../shared/services/summary.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit{
  @Input() cartItem!: ICartItem;
  readonly form = new FormGroup({
    count: new FormControl(this.cartItem.count, Validators.required)
  })

  constructor(private readonly cartService: CartService, private readonly currencyService: CurrencyService, private readonly summaryService: SummaryService) {
  }

  ngOnInit(): void {
    this.form.get('count')?.valueChanges.subscribe(el => {
      this.summaryService.updateSumm(this.currencyService.coefficient, this.cartService.cartPurchases);
    })
  }

  onCountClick(): void{
    this.cartItem.count =  this.form.get('count')?.value;
    this.summaryService.updateSumm(this.currencyService.coefficient, this.cartService.cartPurchases);
  }

  deleteItem(): void {
    this.cartService.deletePurchase(this.cartItem.purchase.id)
    this.summaryService.updateSumm(this.currencyService.coefficient, this.cartService.cartPurchases);
  }

}
