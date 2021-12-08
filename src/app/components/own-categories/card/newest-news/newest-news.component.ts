import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-newest-news',
  templateUrl: './newest-news.component.html',
  styleUrls: ['./newest-news.component.sass']
})
export class NewestNewsComponent implements OnInit {

  @Input('item')
  items !: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
