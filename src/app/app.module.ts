import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HttpClientModule } from "@angular/common/http";
import {ConstantService} from "./service/constant-service";
import { ShopsComponent } from './components/shops/shops.component';
import { GoodCardComponent } from './components/good-card/good-card.component';
import { ShopCardComponent } from './components/shop-card/shop-card.component';
import { HeaderComponent } from './components/header/header.component';
import {CommonModule} from "@angular/common";
import {ShopInfoComponent} from './components/shop-info/shop-info.component';
import {AppRoutingModule, routingComponents} from "./app-routing-module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { SubscribeModuleComponent } from './components/subscribe-module/subscribe-module.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    ShopsComponent,
    GoodCardComponent,
    ShopCardComponent,
    HeaderComponent,
    ShopInfoComponent,
    routingComponents,
    SubscribeModuleComponent
  ],
    imports: [
      BrowserAnimationsModule,
      FormsModule,
      CommonModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule,
      AppRoutingModule,
      BrowserModule,
      FlexLayoutModule,
      HttpClientModule,
      MatFormFieldModule
    ],
  providers: [ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
