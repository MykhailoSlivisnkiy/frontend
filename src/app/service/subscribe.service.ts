import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstantService} from "./constant-service";
import {Shop} from "../models/shop";
import {Observable} from "rxjs";
import {NewSubscription} from "../models/new-subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  subscribeToShop(newSubscription: NewSubscription) {
    return this.http.post(this.constantService.goodsServiceURL + '/subscribe', newSubscription).subscribe(response => {
      this.http.post(this.constantService.subscriptionServiceURL + '/subscribe', newSubscription).subscribe(resp => resp);
    });
  }
}
