import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item.component';
import {TuiInputCountModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CartItemComponent
  ],
  exports: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    TuiInputCountModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule
  ]
})
export class CartItemModule { }
