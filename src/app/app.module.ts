import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { GoodsComponent } from './components/goods/goods.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SubscribeModuleComponent } from './components/subscribe-module/subscribe-module.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AgmCoreModule} from "@agm/core";
import {MatIconModule} from "@angular/material/icon";
import {MatOptionModule} from "@angular/material/core";
import {TokenInterceptor} from "./components/login/token.interceptor";
import { EditModuleComponent } from './components/edit-module/edit-module.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {JwPaginationModule} from "jw-angular-pagination";

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    ShopsComponent,
    ShopInfoComponent,
    GoodCardComponent,
    ShopCardComponent,
    HeaderComponent,
    routingComponents,
    SubscribeModuleComponent,
    EditModuleComponent,
  ],
  imports: [
    JwPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArmHNuaZCwYN3Lyix1dJhwRQTI6vmA9Vw'
    }),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatOptionModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule
  ],
  providers: [
    ConstantService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
