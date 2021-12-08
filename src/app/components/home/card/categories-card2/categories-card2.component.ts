import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-categories-card2',
  templateUrl: './categories-card2.component.html',
  styleUrls: ['./categories-card2.component.sass']
})
export class CategoriesCard2Component implements OnInit {
  @Input('item')
  items !: Item;
  constructor() { }

  ngOnInit(): void {
  }

}
