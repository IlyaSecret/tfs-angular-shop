import {Injectable} from "@angular/core";
import {ICartItem} from "../models/ICartItem";

@Injectable({
  providedIn: "root"
})
export class SummaryService {
  private _summ: number = 0;
  get summ(): number {
    return this._summ;
  }
  updateSumm(coefficient: number, cartPurchases: ICartItem[]): void {
    this._summ = coefficient * cartPurchases.reduce((acc: number, el: ICartItem) => acc + (el.count * el.purchase.price), 0 )
  }
}
