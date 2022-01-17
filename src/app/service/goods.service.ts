import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Goods} from "../models/goods";
import {ConstantService} from "./constant-service";

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  getGoodsByShop(shopId: number) {
    return this.http.get<Goods[]>(this.constantService.goodsServiceURL + '/goods?shopId=' + shopId);
  }
}
