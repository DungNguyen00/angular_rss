import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { ItemsService } from 'src/app/service/service-items/items.service';

const apiUrl = 'https://tuoitre.vn/rss/kinh-doanh.rss';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['../own-categories.component.sass']
})
export class BusinessComponent implements OnInit {
  @Input('item') item !:Item;
  arrTin: String[] = ['Tin nổi bật 1', 'Tin nổi bật 2', 'Tin nổi bật 3'];
  items: Item[] = [];
  count = 0;
  
  constructor(private itemsService: ItemsService) { }
  
  ngOnInit(): void {
    this.subcribeItem();
  }
  
  async subcribeItem() {
    let itemsa = await this.itemsService.getItems(
      apiUrl,
      this.count,
      20
      );
      this.items.sort(function (x, y) {
        return y.updateTime.getTime() - x.updateTime.getTime();
      });
      
      this.items.push.apply(this.items, itemsa);
    }
    
  }
  