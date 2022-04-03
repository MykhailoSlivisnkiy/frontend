import { Component, OnInit } from '@angular/core';
import {Shop} from "../../models/shop";
import {Page} from "../../models/page";
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../service/shop.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditModuleComponent} from "../edit-module/edit-module.component";

const ONLY_FAVORITE = 'My Favorite';
const ONLY_SUBSCRIBED = 'My Subscribed';

@Component({
  selector: 'app-my-shops',
  templateUrl: './my-shops.component.html',
  styleUrls: ['./my-shops.component.scss']
})
export class MyShopsComponent implements OnInit {

  shops: Shop[] = [];
  visibleShops: Shop[] = [];
  isShopsEmpty: boolean = false;
  isToggleButtonActive: boolean = false;
  pager: Page| any;
  listOfPages: number[] = [];
  numberOfPages: number = 0;
  pageNumber: number = 0;
  filterByName: string = '';
  typeOfShops: string = ONLY_SUBSCRIBED;

  constructor(private route: ActivatedRoute, private router: Router, private goodsService: ShopService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.pageNumber = parseInt(<string>this.route.snapshot.paramMap.get(('page')));

    this.setPage(Number.isNaN(this.pageNumber) ? 0 : this.pageNumber - 1);
  }

  createNewShop() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-module-component";
    dialogConfig.height = "750px";
    dialogConfig.width = "750px";
    const modalDialog = this.matDialog.open(EditModuleComponent, dialogConfig);

    this.matDialog.afterAllClosed.subscribe(data=> this.setPage(0));

  }

  setPageByPagination(page: number) {
    this.setPage(page);
  }

  setPage(page: number) {

    // if(page < 0 || page >= this.pager?.totalPages) {
    //   return;
    // }

    if(this.isToggleButtonActive) {
      this.goodsService.getAllFavorite()
        .subscribe((data: Shop[]) => {
          this.pager = data;
          this.numberOfPages = 0;
          this.shops = data;
          this.visibleShops =  Object.assign([], this.shops);

          // this.listOfPages = Array(this.numberOfPages).fill(0).map((x, i) => (i));


          this.isShopsEmpty = true;
        });
    } else {
      this.goodsService.getAllSubscribed()
        .subscribe((data: Shop[]) => {
          this.pager = data;
          this.numberOfPages = 0;
          this.shops = data;
          this.visibleShops =  Object.assign([], this.shops);

          // this.listOfPages = Array(this.numberOfPages).fill(0).map((x, i) => (i));


          this.isShopsEmpty = true;
        });
    }
  }

  handleToggleChange() {
    this.isToggleButtonActive = !this.isToggleButtonActive;
    this.typeOfShops = this.isToggleButtonActive ? ONLY_FAVORITE : ONLY_SUBSCRIBED;
    this.setPage(0);
  }

  updateSearch(target: EventTarget | null) {

    if((<HTMLInputElement>target).value === '') {
      this.visibleShops =  Object.assign([], this.shops);
    } else {

      this.goodsService.getAllByName(this.typeOfShops, (<HTMLInputElement>target).value)
        .subscribe((data: Shop[]) => {
          this.visibleShops = data;
        });
    }
  }
}
