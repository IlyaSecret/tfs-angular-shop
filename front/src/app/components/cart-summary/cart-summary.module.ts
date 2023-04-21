import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary.component';
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
  declarations: [
    CartSummaryComponent
  ],
  exports: [
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    TuiButtonModule
  ]
})
export class CartSummaryModule { }
