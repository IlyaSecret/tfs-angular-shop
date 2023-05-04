import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import {ListItemModule} from "../../components/list-item/list-item.module";
import {CartItemModule} from "../../components/cart-item/cart-item.module";
import {CartFormModule} from "../../components/cart-form/cart-form.module";



@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    ListItemModule,
    CartItemModule,
    CartFormModule
  ]
})
export class CartPageModule { }
