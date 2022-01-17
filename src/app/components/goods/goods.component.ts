import {Component, Input, OnInit} from '@angular/core';
import {Goods} from "../../models/goods";
import {GoodsService} from "../../service/goods.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  @Input() shopId: number = 0;

  goods: Goods[] = [];
  isGoodsListEmpty: boolean = false;

  constructor(private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.goodsService.getGoodsByShop(this.shopId)
      .subscribe((data: Goods[]) => {
        this.goods = data;
        if(this.goods.length !== 0) {
          this.isGoodsListEmpty = true;
        }
      });
  }

}
