import {Inject, Injectable} from "@angular/core";
import {IPurchase} from "../models/IPurchase";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class PurchaseService{
  private readonly _host: string = 'http://localhost:3000'
  constructor(private httpClinet: HttpClient) {
  }

  getAllPurchases(): Observable<IPurchase[]> {
    return this.httpClinet.get<IPurchase[]>(`${this._host}/purchases/`);
  }

  getById(id: number): Observable<IPurchase> {
    return this.httpClinet.get<IPurchase>(`${this._host}/purchases/${id}`)
  }
}
