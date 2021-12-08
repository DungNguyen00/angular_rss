
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../model/item';
import { ItemLink } from '../../model/itemLink';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root',
})


export class ItemsService {
  

  constructor(private httpClient:HttpClient) { }

  getAll(api:string):Observable<Item[]>{
    return this.httpClient.get<Item[]>(api).pipe(
    )
  }

  async getItems(
    url: string,
    pageNo: number,
    countNo: number
  ): Promise<Item[]> {
    const data = await this.httpClient
      .get(url, {
        headers: new HttpHeaders({
          Accept: 'application/xml',
        }),
        responseType: 'text',
      })
      .toPromise();
    let items: Item[] = [];
    let parser = new DOMParser();

    let xml = parser.parseFromString(data, 'application/xhtml+xml');
    // list item from rss
    let itemsArr = xml.getElementsByTagName('item');
    console.log(itemsArr);
    let startPage = pageNo * countNo;
    let endPage = startPage + countNo;
    if (startPage >= itemsArr.length) {
      startPage = 0;
      endPage = itemsArr.length;
    }
    for (let i = startPage; i < endPage; i++) {
      if (i < itemsArr.length) {
        let itemss = await this.convertToItem(itemsArr[i]);
        items.push(itemss);
      }
    }
    console.log(items);
    return items;
  }
  private async convertToItem(ele: any): Promise<Item> {
    let title = ele.getElementsByTagName('title')[0].innerHTML.slice(9, -3);
    let linkDetail = ele.getElementsByTagName('link')[0].innerHTML.slice(9, -3);
    // description tag contain diversity element need to parse
    let desc = ele.getElementsByTagName('description')[0].innerHTML.slice(9, -3);
    let parser = new DOMParser();
    let html = parser.parseFromString(desc, 'text/html');
    //convert image link with full width
    let linkImg = html.getElementsByTagName('img')[0].src;

    let indexc = linkImg.indexOf('zoom');
    linkImg = 'https://cdn1.tuoitre.vn/' + linkImg.slice(indexc);
    // get pubdate
    let pubDate = ele.getElementsByTagName('pubDate')[0].innerHTML.trim();
    let date: Date = new Date(pubDate);
    // get text desciption need to remove orther text content
    let body = html.getElementsByTagName('body')[0];
    let description = body.textContent;

    // object item
    let item: Item = new Item(
      title,
      linkDetail,
      description ?? '',
      linkImg,
      date
    );
    return item;
  }
}