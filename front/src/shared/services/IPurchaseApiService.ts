import {Observable} from "rxjs";
import {IPurchase} from "../models/IPurchase";
import {InjectionToken} from "@angular/core";

export const PURCHASE_API_SERVICE_TOKEN = new InjectionToken<IPurchaseApiService>('PURCHASE_API_SERVICE_TOKEN');

export interface IPurchaseApiService {
  getAllPurchases(): Observable<IPurchase[]>
  getById(id: number): Observable<IPurchase>
}
