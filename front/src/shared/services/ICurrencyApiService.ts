import {InjectionToken} from "@angular/core";
import {Observable} from "rxjs";
import {ICurrency} from "../models/ICurrency";

export const CURRENCY_API_SERVICE_TOKEN = new InjectionToken('CURRENCY_API_SERVICE_TOKEN');

export interface ICurrencyApiService {
  getExchange(amount: number, from: string, to: string): Observable<ICurrency>
}
