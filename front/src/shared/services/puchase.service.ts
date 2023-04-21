import {Inject, Injectable} from "@angular/core";
import {IPurchase} from "../models/IPurchase";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPurchaseApiService} from "./IPurchaseApiService";

const host = 'http://localhost:3000/purchases/'

@Injectable({
  providedIn: "root"
})
export class PurchaseService implements IPurchaseApiService{
  constructor(private httpClinet: HttpClient) {
  }

  getAllPurchases(): Observable<IPurchase[]> {
    return this.httpClinet.get<IPurchase[]>(host);
  }

  getById(id: number): Observable<IPurchase> {
    return this.httpClinet.get<IPurchase>(host + id)
  }
}
