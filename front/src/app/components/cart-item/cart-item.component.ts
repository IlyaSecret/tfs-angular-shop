import {Component, Input, OnInit, Output} from '@angular/core';
import {ICartItem} from "../../../shared/models/ICartItem";
import {CartService} from "../../../shared/services/cart.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CurrencyService} from "../../../shared/services/currency.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit{
  @Input() cartItem!: ICartItem;
  form!: FormGroup;

  constructor(public readonly cartService: CartService, private readonly currencyService: CurrencyService) {
    
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      count: new FormControl(this.cartItem.count, Validators.required)
    })
    const subscription = this.form.get('count')?.valueChanges.subscribe(el => {
      this.currencyService.updateSumm();
      subscription?.unsubscribe();
    })
  }

  onCountClick(): void{
    this.cartItem.count =  this.form.get('count')?.value;
    this.currencyService.updateSumm()
  }

  deleteItem(): void {
    this.cartService.deletePurchase(this.cartItem.purchase.id)
    this.currencyService.updateSumm();
  }

}
