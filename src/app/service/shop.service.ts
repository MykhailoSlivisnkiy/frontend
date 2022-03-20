import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstantService} from "./constant-service";
import {Shop} from "../models/shop";
import {UserShopInfoDto} from "../models/user-shop-info-dto";

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

  getUserShopSubscriptionInfo(token: string | null, shopId: number) {
    return this.http.get<UserShopInfoDto>(this.constantService.subscriptionServiceURL + '/subscribe?token=' + token + '&shopId=' + shopId);
  }

  unsubscribe(token: string | null, shopId: number) {
    return this.http.get<UserShopInfoDto>(this.constantService.subscriptionServiceURL + '/subscribe/unsubscribe?token=' + token + '&shopId=' + shopId);
  }

  update(shop: string) {
    return this.http.post<Shop>(this.constantService.goodsServiceURL + '/shops', shop);
  }

  save(shop: string) {
    return this.http.put<Shop>(this.constantService.goodsServiceURL + '/shops', shop);
  }
}
