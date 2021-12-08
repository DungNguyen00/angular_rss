import { Injectable } from '@angular/core';
import { ItemMenu } from '../../model/itemMenu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedlinkService } from '../service-feedLink/feedlink.service';
import { ItemLink } from '../../model/itemLink';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private url: string = '../../../assets/menu.json';
  constructor(
    private http: HttpClient,
    private feedlinkServices: FeedlinkService
  ) {}

  async getItem(): Promise<ItemMenu[]> {
    let itemlink = await this.feedlinkServices.getLinkItem();
    const data = await this.http
      .get(this.url, { responseType: 'text' })
      .toPromise();
    let listItem = [];
    let obj = JSON.parse(data);
    let lstParent: ItemLink[];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i]['title'].trim() == itemlink[i].title.trim()) {
        let item: ItemMenu = { parent: itemlink[i], child: [] };

        listItem.push(item);
      }
    }
    return listItem;
  }
}
