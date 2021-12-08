import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.sass']
})
export class HotNewsComponent implements OnInit {

  @Input('item')
  items !: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
