import { Component, OnInit } from '@angular/core';
import {Shop} from "../../models/shop";
import {ShopService} from "../../service/shop.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditModuleComponent} from "../edit-module/edit-module.component";
import {Page} from "../../models/page";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  shops: Shop[] = [];
  visibleShops: Shop[] = [];
  isShopsEmpty: boolean = false;
  pager: Page| any;
  listOfPages: number[] = [];
  numberOfPages: number = 0;
  pageNumber: number = 0;
  filter: string = 'All';
  filterByName: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private goodsService: ShopService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.pageNumber = parseInt(<string>this.route.snapshot.paramMap.get(('page')));

    this.setPage('All', Number.isNaN(this.pageNumber) ? 0 : this.pageNumber - 1, this.filterByName, true);
  }

  createNewShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-module-component";
    dialogConfig.height = "750px";
    dialogConfig.width = "750px";
    this.matDialog.open(EditModuleComponent, dialogConfig);

    this.matDialog.afterAllClosed.subscribe(data=> this.setPage(this.filter, 0, this.filterByName, true));

  }

  setPageByPagination(page: number) {
    this.setPage(this.filter, page, this.filterByName, true);
  }

  changeFilter(filter: string) {

    this.filter = filter;

    this.setPage(filter, 0, this.filterByName,false);
  }

  updateSearch(target: EventTarget | null) {
    this.setPage(this.filter, 0, (<HTMLInputElement>target).value, false);
  }

  setPage(filter: string, page: number, name: string, isInit: boolean) {

    if(isInit && (page < 0 || page >= this.pager?.totalPages)) {
      return;
    }

    this.goodsService.getAllShops(page, filter, name)
      .subscribe((data: Page) => {
        this.shops = data.content;
        this.pager = data;
        this.numberOfPages = this.pager.totalPages;

        this.listOfPages = Array(this.numberOfPages).fill(0).map((x, i) => (i));
        this.isShopsEmpty = true;
      });
  }
}
