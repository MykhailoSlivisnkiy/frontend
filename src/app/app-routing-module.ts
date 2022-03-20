import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShopInfoComponent} from "./components/shop-info/shop-info.component";
import {ShopsComponent} from "./components/shops/shops.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'shop'},
  {path: 'login', component: LoginComponent},
  {path: 'shop', component: ShopsComponent},
  {path: 'shop-info/:id', component: ShopInfoComponent},
  {path: 'shop-info/:id/page/:page', component: ShopInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopInfoComponent, ShopsComponent, LoginComponent];

