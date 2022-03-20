import { Injectable } from '@angular/core';
import {Goods} from "../models/goods";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  newGoods: Goods[] = [
    new Goods('T-Shirt', 'https://i.pinimg.com/originals/bb/e5/ca/bbe5caf1dff58b149eacfc1400296832.png', 1, 25),
    new Goods('T-Shirt', 'https://i.pinimg.com/originals/14/df/07/14df079c67b91e5c2da761b83f51e763.jpg', 1, 12),
    new Goods('T-Shirt', 'https://pyxis.nymag.com/v1/imgs/c4e/674/1892c1d09ba24378b0d547eeaffa7fac93-EN-US-Worn-S1-Main-Vertical-27x40-RGB-PR.rvertical.w600.jpg', 1, 14),
    new Goods('T-Shirt', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/clothes-sale-men-1609866408.jpg?crop=0.489xw:0.978xh;0.511xw,0&resize=640:*', 2, 21),
    new Goods('T-Shirt', 'https://i.pinimg.com/originals/bb/e5/ca/bbe5caf1dff58b149eacfc1400296832.png', 1, 45),
    new Goods('T-Shirt', 'https://i.pinimg.com/originals/14/df/07/14df079c67b91e5c2da761b83f51e763.jpg', 1, 36),
    new Goods('T-Shirt', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/clothes-sale-men-1609866408.jpg?crop=0.489xw:0.978xh;0.511xw,0&resize=640:*', 1, 12),
    new Goods('T-Shirt', 'https://pyxis.nymag.com/v1/imgs/c4e/674/1892c1d09ba24378b0d547eeaffa7fac93-EN-US-Worn-S1-Main-Vertical-27x40-RGB-PR.rvertical.w600.jpg', 1, 11),
    new Goods('T-Shirt', 'https://i.pinimg.com/originals/14/df/07/14df079c67b91e5c2da761b83f51e763.jpg', 2, 55),
    new Goods('T-Shirt', 'https://i.pinimg.com/originals/bb/e5/ca/bbe5caf1dff58b149eacfc1400296832.png', 1, 5),
    new Goods('T-Shirt', 'https://pyxis.nymag.com/v1/imgs/c4e/674/1892c1d09ba24378b0d547eeaffa7fac93-EN-US-Worn-S1-Main-Vertical-27x40-RGB-PR.rvertical.w600.jpg', 1, 12)
  ];

  constructor() { }
}
