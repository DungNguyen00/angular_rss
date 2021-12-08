import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-most-view-news',
  templateUrl: './most-view-news.component.html',
  styleUrls: ['./most-view-news.component.sass']
})
export class MostViewNewsComponent implements OnInit {


  @Input('item')
  items !: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
