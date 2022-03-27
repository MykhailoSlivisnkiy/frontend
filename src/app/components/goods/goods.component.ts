import {Component, Input, OnInit} from '@angular/core';
import {Goods} from "../../models/goods";
import {GoodsService} from "../../service/goods.service";
import {TestService} from "../../service/test.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Page} from "../../models/page";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  @Input() shopId: number = 0;

  goods: Goods[] = [];
  pageOfItems: Array<any> = [];
  isGoodsListEmpty: boolean = false;

  pager: Page | any;
  listOfPages: number[] = [];
  numberOfPages: number = 0;
  pageNumber: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private goodsService: GoodsService, private testService: TestService) { }

  ngOnInit(): void {
    this.pageNumber = parseInt(<string>this.route.snapshot.paramMap.get(('page')));

    this.setPage(Number.isNaN(this.pageNumber) ? 0 : this.pageNumber - 1);
  }

  addNewGoods() {
    const newGoods: Goods[] = Object.assign([], this.testService.newGoods);

    newGoods.forEach(item => item.shopId = this.shopId);

    this.goodsService.addNewGoods(this.testService.newGoods).subscribe(item => {
      this.goods.push(...newGoods);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
    console.log(this.pageOfItems);
  }

  setPage(page: number) {

    if(page < 0 || page >= this.pager?.totalPages) {
      return;
    }

    this.goodsService.getGoodsByShop(this.shopId, page)
      .subscribe((data: Page) => {
        // @ts-ignore
        this.goods = data.content;
        this.pager = data;
        this.numberOfPages = this.pager.totalPages;

        this.listOfPages = Array(this.numberOfPages).fill(0).map((x, i) => (i));

        if(this.goods.length !== 0) {
          this.isGoodsListEmpty = true;
        }

        if(!Number.isNaN(parseInt(<string>this.route.snapshot.paramMap.get(('page'))))) {
          this.router.navigate(['/shop-info', this.shopId, 'page', page + 1]);
        }
      });
  }
}
