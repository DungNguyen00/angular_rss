import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-categories-card1',
  templateUrl: './categories-card1.component.html',
  styleUrls: ['./categories-card1.component.sass'],
})
export class CategoriesCard1Component implements OnInit {
  @Input('item')
  items !: Item;
  constructor() {}

  ngOnInit(): void {}
}
