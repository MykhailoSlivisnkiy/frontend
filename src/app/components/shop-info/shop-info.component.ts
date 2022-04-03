import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SubscribeModuleComponent} from "../subscribe-module/subscribe-module.component";
import {EditModuleComponent} from "../edit-module/edit-module.component";
import {FavoriteShop} from "../../models/favorite-shop";

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})
export class ShopInfoComponent implements OnInit {
  shopId: number = 0;
  shop: Shop = {};
  shopLatitude = 51.678418;
  shopLongitude = 7.809007;

  isUserSubscribed: boolean | undefined;
  isUserFavorite: boolean | undefined;

  constructor(private route: ActivatedRoute, private shopService: ShopService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.shopId = parseInt(<string>this.route.snapshot.paramMap.get(('id')));
    this.getShop();
    this.getUserSubscriptionInfo();
  }

  openSubscribeModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "subscribe-module-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "700px";
    const modalDialog = this.matDialog.open(SubscribeModuleComponent, dialogConfig);
    modalDialog.componentInstance.shopId = this.shopId;
    modalDialog.componentInstance.shopName = this.shop.name ? this.shop.name : '';
    this.matDialog.afterAllClosed.subscribe(data => this.getUserSubscriptionInfo());
  }

  openEditModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-module-component";
    dialogConfig.height = "750px";
    dialogConfig.width = "750px";
    const modalDialog = this.matDialog.open(EditModuleComponent, dialogConfig);
    modalDialog.componentInstance.shopId = this.shopId;
    this.matDialog.afterAllClosed.subscribe(data => this.getShop());
  }

  unsubscribe() {
    this.shopService.unsubscribe(localStorage.getItem('accessToken'), this.shopId).subscribe(response => this.isUserSubscribed = response.isUserSubscribed);
  }

  addToFavorite() {

    this.shopService.addToFavorite(new FavoriteShop(this.shopId, localStorage.getItem('accessToken'))).subscribe(res => this.isUserFavorite = true);
  }

  deleteFavoriteShop() {

    this.shopService.deleteFavorite(new FavoriteShop(this.shopId, localStorage.getItem('accessToken'))).subscribe(res => this.isUserFavorite = false);
  }

  private getUserSubscriptionInfo() {
    this.shopService.getUserShopSubscriptionInfo(localStorage.getItem('accessToken'), this.shopId).subscribe(response => {
      this.isUserSubscribed = response.isUserSubscribed;
      this.isUserFavorite = response.isUserFavoriteShop;
    });
  }

  private getShop() {
    this.shopService.getShopById(this.shopId).subscribe(response => this.shop = response);
  }
}
