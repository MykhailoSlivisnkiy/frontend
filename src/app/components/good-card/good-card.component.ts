import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-good-card',
  templateUrl: './good-card.component.html',
  styleUrls: ['./good-card.component.scss']
})
export class GoodCardComponent implements OnInit {
  @Input() good: any;

  constructor() { }

  ngOnInit(): void {
  }

}
