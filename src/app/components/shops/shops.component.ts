import { Component, OnInit } from '@angular/core';
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditModuleComponent} from "../edit-module/edit-module.component";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  shops: Shop[] = [];
  isShopsEmpty: boolean = false;

  constructor(private goodsService: ShopService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getShops();
  }

  createNewShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-module-component";
    dialogConfig.height = "750px";
    dialogConfig.width = "750px";
    const modalDialog = this.matDialog.open(EditModuleComponent, dialogConfig);

    this.matDialog.afterAllClosed.subscribe(data=> this.getShops());

  }

  private getShops() {
    this.goodsService.getAllShops()
      .subscribe((data: Shop[]) => {
        this.shops = data
        this.isShopsEmpty = true;
      });
  }
}
