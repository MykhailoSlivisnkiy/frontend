import {Component, Input, OnInit} from '@angular/core';
import {SubscribeService} from "../../service/subscribe.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() shop: any;

  constructor(private service: SubscribeService, private router: Router) { }

  ngOnInit(): void {
  }

  subscribe(shopName: string) {
    this.service.subscribeToShop(shopName);
  }

  openShop() {
    this.router.navigate(['/shop-info', this.shop.id]);
  }
}
