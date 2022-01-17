import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-subscribe-module',
  templateUrl: './subscribe-module.component.html',
  styleUrls: ['./subscribe-module.component.scss']
})
export class SubscribeModuleComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SubscribeModuleComponent>) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialogRef.close();
  }

  subscribe() {

  }
}
