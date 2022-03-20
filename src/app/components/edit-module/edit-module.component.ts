import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShopService} from "../../service/shop.service";
import {first} from "rxjs";

const availableTimeValue = [
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {

  shopId: number = 0;
  editForm: FormGroup | any;
  shopAvailableTimeRange = availableTimeValue;

  constructor(private dialogRef: MatDialogRef<EditModuleComponent>, private shopService: ShopService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      city: new FormControl('', []),
      country: new FormControl('', []),
      street: new FormControl('', []),
      website: new FormControl('', []),
      email: new FormControl('', []),
      openTime: new FormControl('', []),
      closeTime: new FormControl('', []),
      image: new FormControl('', [])
    });

    this.shopService.getShopById(this.shopId)
      .pipe(first())
      .subscribe(x => this.editForm.patchValue(x));
  }

  get name() {
    return this.editForm.get('name');
  }

  get phone() {
    return this.editForm.get('phone');
  }

  get city() {
    return this.editForm.get('city');
  }

  get country() {
    return this.editForm.get('country');
  }

  get street() {
    return this.editForm.get('street');
  }

  get website() {
    return this.editForm.get('website');
  }

  get email() {
    return this.editForm.get('email');
  }

  get openTime() {
    return this.editForm.get('openTime');
  }

  get closeTime() {
    return this.editForm.get('closeTime');
  }

  get image() {
    return this.editForm.get('image');
  }


  closeModal() {
    this.dialogRef.close();
  }

  saveChanges() {
   if(this.shopId) {
     this.update();
   } else {
     this.save();
   }
  }

  private update() {
    let form = this.editForm.value;
    form.id = this.shopId;
    let shop = JSON.stringify(form);

    this.shopService.update(shop)
      .pipe(first())
      .subscribe({
        complete(): void {
        },
        next: () => {
          console.log('press 2');

          // this.alertService.success('User updated', { keepAfterRouteChange: true });
          this.dialogRef.close();
        },
        error: error => {
          console.error('press 3 ', error);

          // this.alertService.error(error);
          //  this.loading = false;
        }
      });
  }

  private save() {
    let form = this.editForm.value;
    let shop = JSON.stringify(form);

    this.shopService.save(shop)
      .pipe(first())
      .subscribe({
        complete(): void {
        },
        next: () => {
          console.log('press 2');

          // this.alertService.success('User updated', { keepAfterRouteChange: true });
          this.dialogRef.close();
        },
        error: error => {
          console.error('press 3 ', error);

          // this.alertService.error(error);
          //  this.loading = false;
        }
      });
  }
}
