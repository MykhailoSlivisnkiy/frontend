import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstantService} from "./constant-service";
import {Goods} from "../models/goods";
import {Shop} from "../models/shop";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  getAllShops() {
    return this.http.get<Shop[]>(this.constantService.goodsServiceURL + '/shops');
  }

  getShopById(id: number) {
    return this.http.get<Shop>(this.constantService.goodsServiceURL + '/shops/' + id);
  }
}
