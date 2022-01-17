import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstantService} from "./constant-service";
import {Shop} from "../models/shop";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  subscribeToShop(shopName: string) {
    return this.http.post(this.constantService.subscriptionServiceURL + '/subscribe', shopName).subscribe(response => response);
  }
}
