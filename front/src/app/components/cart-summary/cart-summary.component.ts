import {Component} from '@angular/core';
import {SummaryService} from "../../../shared/services/summary.service";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {
  constructor(public readonly summaryService: SummaryService) {}
}
