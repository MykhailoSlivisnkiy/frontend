import { Component, OnInit } from '@angular/core';
import {Shop} from "../../models/shop";
import {Page} from "../../models/page";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../service/shop.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditModuleComponent} from "../edit-module/edit-module.component";

@Component({
  selector: 'app-my-shops',
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.scss']
})
export class MyShopsComponent implements OnInit {

  shops: Shop[] = [];
  isShopsEmpty: boolean = false;
  pager: Page| any;
  listOfPages: number[] = [];
  numberOfPages: number = 0;
  pageNumber: number = 0;
  filter: string = 'All';

  constructor(private route: ActivatedRoute, private router: Router, private goodsService: ShopService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.pageNumber = parseInt(<string>this.route.snapshot.paramMap.get(('page')));

    this.setPage('All', Number.isNaN(this.pageNumber) ? 0 : this.pageNumber - 1);
  }

  createNewShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-module-component";
    dialogConfig.height = "750px";
    dialogConfig.width = "750px";
    const modalDialog = this.matDialog.open(EditModuleComponent, dialogConfig);

    this.matDialog.afterAllClosed.subscribe(data=> this.setPage(this.filter, 0));

  }

  setPageByPagination(page: number) {
    this.setPage(this.filter, page);
  }

  setPage(filter: string, page: number) {

    // if(page < 0 || page >= this.pager?.totalPages) {
    //   return;
    // }

    this.goodsService.getAllFavorite(localStorage.getItem('access_token'))
      .subscribe((data: Shop[]) => {
        this.pager = data;
        this.numberOfPages =0;
        this.shops = data;

        // this.listOfPages = Array(this.numberOfPages).fill(0).map((x, i) => (i));


        this.isShopsEmpty = true;
      });
  }

  changeFilter(filter: string) {

    this.filter = filter;

    this.setPage(filter, 0);
  }

}
