import {Component, Input, OnInit} from '@angular/core';
import {Goods} from "../../models/goods";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() good: Goods | any;

  constructor() { }

  ngOnInit(): void {
  }

}
