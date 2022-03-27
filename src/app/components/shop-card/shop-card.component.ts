import {Component, Input, OnInit} from '@angular/core';
import {SubscribeService} from "../../service/subscribe.service";
import {Router} from "@angular/router";
import {NewSubscription} from "../../models/new-subscription";
import {AuthService} from "../../service/auth.service";



@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() shop: any;

  constructor(private service: SubscribeService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log('sub ' + JSON.stringify(this.shop));
  }

  subscribe() {
    this.service.subscribeToShop(new NewSubscription(this.shop.Id, this.authService.accessToken, this.shop.name, []));
  }

  openShop() {
    this.router.navigate(['/shop-info', this.shop.id]);
  }
}
