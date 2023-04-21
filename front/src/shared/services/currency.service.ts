import {Injectable} from "@angular/core";
import {ICurrency} from "../models/ICurrency";
import {ICartItem} from "../models/ICartItem";
import {CartService} from "./cart.service";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const currencyApi = 'https://api.apilayer.com/currency_data/convert?';
const apiKey = 'cVA9PMqohW0gD1ozDhIwt5qezMywUHXv';

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  private _current: string = 'RUB';
  private _to: string = 'RUB';
  private _coefficient: number = 1;
  private _summ: number = 0;

  get coefficient(): number {
    return this._coefficient;
  }
  get current(): string {
    return this._current;
  }
  get to(): string {
    return this._to;
  }
  get summ(): number {
    return this._summ;
  }

  constructor(private readonly cartService: CartService, private readonly httpClient: HttpClient) {
  }
  getExchange(from: string, to: string, amount: number): Observable<ICurrency> {
    const header = new HttpHeaders().set("apikey", apiKey);
    return this.httpClient.get<ICurrency>(`${currencyApi}&to=${to}&from=${from}&amount=${amount}`, {headers: header})
  }
  updateSumm(): void {
    this._summ = this._coefficient * this.cartService.cartPurchases.reduce((acc: number, el: ICartItem) => acc + (el.count * el.purchase.price), 0 )
  }
}
