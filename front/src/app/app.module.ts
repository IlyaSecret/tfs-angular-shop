import { TuiRootModule, TuiDialogModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CartPageModule} from "./pages/cart-page/cart-page.module";
import {ItemsPageModule} from "./pages/items-page/items-page.module";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      CartPageModule,
      ItemsPageModule,
    AppRoutingModule,
    HttpClientModule
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
