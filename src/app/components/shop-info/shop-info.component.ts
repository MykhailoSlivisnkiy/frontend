import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SubscribeModuleComponent} from "../subscribe-module/subscribe-module.component";

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})
export class ShopInfoComponent implements OnInit {
  shopId: number = 0;
  shop: Shop = {};

  constructor(private route: ActivatedRoute, private shopService: ShopService, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.shopId = parseInt(<string>this.route.snapshot.paramMap.get(('id')));
    this.shopService.getShopById(this.shopId).subscribe(response => this.shop = response);
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "subscribe-module-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "700px";
    const modalDialog = this.matDialog.open(SubscribeModuleComponent, dialogConfig);
  }
}
