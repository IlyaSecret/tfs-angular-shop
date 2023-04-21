import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListItemComponent} from "./list-item.component";
import {TuiInputCountModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListItemComponent
  ],
  exports: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    TuiInputCountModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    ReactiveFormsModule
  ]
})
export class ListItemModule { }
