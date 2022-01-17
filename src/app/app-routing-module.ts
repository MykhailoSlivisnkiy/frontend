import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShopInfoComponent} from "./components/shop-info/shop-info.component";
import {ShopsComponent} from "./components/shops/shops.component";

const routes: Routes = [
  {path: 'shop', component: ShopsComponent},
  {path: 'shop-info/:id', component: ShopInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopInfoComponent];

