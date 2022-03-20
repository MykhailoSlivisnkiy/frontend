import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {SubscribeService} from "../../service/subscribe.service";
import {NewSubscription} from "../../models/new-subscription";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-subscribe-module',
  templateUrl: './subscribe-module.component.html',
  styleUrls: ['./subscribe-module.component.scss']
})
export class SubscribeModuleComponent implements OnInit {
  shopId: number = 0;
  shopName: string = '';
  subscribedTypes: string[] = [];

  constructor(private dialogRef: MatDialogRef<SubscribeModuleComponent>, private subscribeService: SubscribeService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  chooseSubscriptionType(type: string) {
    if(this.subscribedTypes.includes(type)) {
      delete this.subscribedTypes[this.subscribedTypes.findIndex(item => item === type)];
      // @ts-ignore
      document.getElementById(type).classList.remove('chosen-subscription');
    } else {
      this.subscribedTypes.push(type);
      // @ts-ignore
      document.getElementById(type).classList.add('chosen-subscription');
    }

    console.log(this.subscribedTypes);
  }

  subscribe() {
    this.subscribedTypes = this.subscribedTypes.map(item => item.toLocaleUpperCase());
    this.subscribeService.subscribeToShop(new NewSubscription(this.shopId, this.authService.accessToken, this.shopName, this.subscribedTypes));
    this.closeModal();
  }
}
