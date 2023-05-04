import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFormComponent } from './cart-form.component';
import {TuiDataListWrapperModule, TuiInputModule, TuiSelectModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule} from "@taiga-ui/core";



@NgModule({
  declarations: [
    CartFormComponent
  ],
  exports: [
    CartFormComponent
  ],
  imports: [
    CommonModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule
  ]
})
export class CartFormModule { }
