import { Component, OnInit } from '@angular/core';
import {Goods} from "../../models/goods";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  goods: Goods[] = [
    new Goods("test", "https://i.pinimg.com/originals/14/df/07/14df079c67b91e5c2da761b83f51e763.jpg", 1),
    new Goods("test", "https://img.ltwebstatic.com/images3_pi/2020/11/03/1604382939e7ede3448062c4fc541649d210a5d7fe_thumbnail_405x552.jpg", 1),
    new Goods("test", "https://i.pinimg.com/originals/14/df/07/14df079c67b91e5c2da761b83f51e763.jpg", 1),
    new Goods("test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZ7YtDiQipq3a2XoF-cctDHUAfXXYA_wZA7ndN90VFQQL3B8IqnTajwt9r51dEawTJm8&usqp=CAU", 1),
    new Goods("test", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flattering-shirts-1559933975.jpg?crop=0.442xw:0.885xh;0.0224xw,0.0481xh&resize=640:*", 1),
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
