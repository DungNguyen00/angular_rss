import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.sass']
})
export class TopNewsComponent implements OnInit {

  @Input('item')
  items !: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
