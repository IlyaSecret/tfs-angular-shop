import {Component, OnInit} from '@angular/core';
import {PurchaseService} from "../../../shared/services/puchase.service";
import {Observable} from "rxjs";
import {IPurchase} from "../../../shared/models/IPurchase";

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent{
  readonly purchases$: Observable<IPurchase[]> = this.purchaseService.getAllPurchases();
  constructor(public readonly purchaseService: PurchaseService) {
  }

}
