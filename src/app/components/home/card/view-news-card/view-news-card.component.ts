import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-view-news-card',
  templateUrl: './view-news-card.component.html',
  styleUrls: ['./view-news-card.component.sass']
})
export class ViewNewsCardComponent implements OnInit {
  @Input('item')
  items !: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
