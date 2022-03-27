import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Goods} from "../models/goods";
import {ConstantService} from "./constant-service";
import {GoodsPageResponse} from "../models/goods-page-response";
import {Page} from "../models/page";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  getGoodsByShop(shopId: number, page: number) {
    return this.http.get<Page>(this.constantService.goodsServiceURL + '/goods?shopId=' + shopId + '&page=' + page);
  }

  addNewGoods(goods: Goods[]) {
    return this.http.post<Goods[]>(this.constantService.goodsServiceURL + '/goods', goods);
  }
}
