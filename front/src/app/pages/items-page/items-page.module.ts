import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsPageComponent } from './items-page.component';
import {ListItemModule} from "../../components/list-item/list-item.module";
import {TuiForModule} from "@taiga-ui/cdk";



@NgModule({
  declarations: [
    ItemsPageComponent
  ],
  imports: [
    CommonModule,
    ListItemModule,
    TuiForModule
  ]
})
export class ItemsPageModule { }
