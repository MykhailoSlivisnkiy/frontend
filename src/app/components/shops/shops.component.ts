import { Component, OnInit } from '@angular/core';
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  shops: Shop[] = [];
  isShopsEmpty: boolean = false;

  constructor(private goodsService: ShopService) { }

  ngOnInit(): void {
    this.goodsService.getAllShops()
      .subscribe((data: Shop[]) => {
        this.shops = data
        this.isShopsEmpty = true;
      });
  }

}
