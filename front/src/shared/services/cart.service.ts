import {Injectable} from "@angular/core";
import {IPurchase} from "../models/IPurchase";
import {ICartItem} from "../models/ICartItem";
import {CurrencyService} from "./currency.service";

@Injectable(
  {
    providedIn: "root"
  }
)
export class CartService {
  private _cartPurchases: ICartItem[] = [];

  get cartPurchases(): ICartItem[] {
    return this._cartPurchases;
  }

  addToCart(purchase: IPurchase, count: number) {
    let purchaseIndex = this._cartPurchases.findIndex((item: ICartItem) => item.purchase.id === purchase.id)
    if (purchaseIndex === -1) {
      this._cartPurchases.push({purchase: purchase, count: count})
    }
    else {
      this._cartPurchases[purchaseIndex].count += count;
    }

  }

  deletePurchase(id: string): void {
    this._cartPurchases = this._cartPurchases.filter((el: ICartItem) => el.purchase.id !== id)
  }
}
