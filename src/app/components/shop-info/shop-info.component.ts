import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.scss']
})
export class ShopInfoComponent implements OnInit {
  shopId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shopId = parseInt(<string>this.route.snapshot.paramMap.get(('id')));
  }

}
