import { Component, HostListener, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemMenu } from 'src/app/model/itemMenu';
import { ItemsService } from 'src/app/service/service-items/items.service';
import { MenuService } from 'src/app/service/service-menu/menu.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  items: Item[] = [];
  itemsCate = new Map();
  itemMenu: ItemMenu[] = [];
  count = 0;
  arrTin: String[] = ['Tin nổi bật 1', 'Tin nổi bật 2', 'Tin nổi bật 3'];

  @ViewChild('scrollMe') private myScrollContainer: ElementRef | undefined;
  constructor(
    private itemService: ItemsService,
    private menuServices: MenuService
  ) { }

  ngOnInit(): void {
    this.subcribeItem();

  }

  async subcribeItem() {
    this.itemMenu = await this.menuServices.getItem();
    let itemsa = await this.itemService.getItems(
      this.itemMenu[0].parent.link,
      this.count,
      20
    );


    this.items.push.apply(this.items, itemsa);
  }
  show() {
    this.count = this.count + 1;
    this.subcribeItem();
  }

}
