import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ItemsPageComponent} from "./pages/items-page/items-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";

const routes = [
  {path: '', component: ItemsPageComponent},
  {path: 'cart', component: CartPageComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
