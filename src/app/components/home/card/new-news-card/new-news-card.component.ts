import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-new-news-card',
  templateUrl: './new-news-card.component.html',
  styleUrls: ['./new-news-card.component.sass'],
})
export class NewNewsCardComponent implements OnInit {
  @Input('item')
  items!: Item;
  constructor() {}

  ngOnInit(): void {}
}
