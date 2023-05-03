import {Injectable} from "@angular/core";
import {ICurrency} from "../models/ICurrency";
import {ICartItem} from "../models/ICartItem";
import {CartService} from "./cart.service";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  private readonly currencyApi: string = 'https://api.apilayer.com';
  private readonly apiKey: string = 'cVA9PMqohW0gD1ozDhIwt5qezMywUHXv';
  private _coefficient = 1;

  get coefficient(): number {
    return this._coefficient;
  }

  constructor(private readonly httpClient: HttpClient) {
  }

  getExchange(from: string, to: string, amount: number): Observable<ICurrency> {
    const header = new HttpHeaders().set("apikey", this.apiKey);
    return this.httpClient.get<ICurrency>(`${this.currencyApi}/currency_data/convert?&to=${to}&from=${from}&amount=${amount}`, {headers: header})
      .pipe(
        tap(value => (this._coefficient = value.info.quote)
        ))
  }


}
