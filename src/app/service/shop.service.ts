import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstantService} from "./constant-service";
import {Shop} from "../models/shop";
import {UserShopInfoDto} from "../models/user-shop-info-dto";
import {Page} from "../models/page";
import {FavoriteShop} from "../models/favorite-shop";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  getAllShops(page: number, filter: string, name:string) {
    return this.http.get<Page>(this.constantService.goodsServiceURL + '/shops/getAll?page=' + page + '&filter=' + filter + '&filterByName=' + name);
  }

  getAllFavorite() {
    return this.http.get<Shop[]>(this.constantService.goodsServiceURL + '/users/get-favorite/');
  }

  getAllSubscribed() {
    return this.http.get<Shop[]>(this.constantService.goodsServiceURL + '/users/get-subscribed/');
  }

  getAllByName(filter: string, name: string) {
    return this.http.get<Shop[]>(this.constantService.goodsServiceURL + '/shops/search/' + filter + '/' + name);
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

  addToFavorite(shop: FavoriteShop) {
    return this.http.post<FavoriteShop>(this.constantService.goodsServiceURL + '/users', shop);
  }

  deleteFavorite(shop: FavoriteShop) {
    return this.http.post<FavoriteShop>(this.constantService.goodsServiceURL + '/users/delete-favorite-shop', shop);
  }

  update(shop: string) {
    return this.http.post<Shop>(this.constantService.goodsServiceURL + '/shops', shop);
  }

  save(shop: string) {
    return this.http.put<Shop>(this.constantService.goodsServiceURL + '/shops', shop);
  }
}
