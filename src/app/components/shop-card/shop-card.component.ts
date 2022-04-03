import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubscribeService} from "../../service/subscribe.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SubscribeModuleComponent} from "../subscribe-module/subscribe-module.component";
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";



@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() shop: Shop = {};
  @Input() showSubscribedButtons: boolean = true;

  constructor(private service: SubscribeService, private router: Router, private matDialog: MatDialog, private shopService: ShopService) { }

  ngOnInit(): void {
  }

  subscribe() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "subscribe-module-component";
    dialogConfig.height = "400px";
    dialogConfig.width = "700px";
    const modalDialog = this.matDialog.open(SubscribeModuleComponent, dialogConfig);
    modalDialog.componentInstance.shopId = this.shop.id;
    modalDialog.componentInstance.shopName = this.shop.name ? this.shop.name : '';
    this.matDialog.afterAllClosed.subscribe(data => this.getUserSubscriptionInfo());
  }

  unsubscribe () {
    let shopId = 0;

    if(this.shop.id !== undefined) {
      shopId = this.shop.id;
    }

    //TODO: replace undefined values. Look above
    this.shopService.unsubscribe(localStorage.getItem('accessToken'), shopId).subscribe(response => this.shop.isSubscribed = response.isUserSubscribed);
  }

  openShop() {
    this.router.navigate(['/shop-info', this.shop.id]);
  }

  getUserSubscriptionInfo() {
    let shopId = 0;

    if(this.shop.id !== undefined) {
      shopId = this.shop.id;
    }

    this.shopService.getUserShopSubscriptionInfo(localStorage.getItem('accessToken'), shopId).subscribe(response => {
      this.shop.isSubscribed = response.isUserSubscribed;
    });
  }
}
