import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ShopInfoComponent} from "./components/shop-info/shop-info.component";
import {ShopsComponent} from "./components/shops/shops.component";
import {LoginComponent} from "./components/login/login.component";
import {MyShopsComponent} from "./components/my-shops/my-shops.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'shop'},
  {path: 'login', component: LoginComponent},
  {path: 'shop', component: ShopsComponent},
  {path: 'my-shops', component: MyShopsComponent},
  {path: 'shop-info/:id', component: ShopInfoComponent},
  {path: 'shop-info/:id/page/:page', component: ShopInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShopInfoComponent, ShopsComponent, LoginComponent];

