import { Injectable } from '@angular/core';
import { ItemLink } from '../../model/itemLink';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedlinkService {
  private url = 'https://tuoitre.vn/rss.htm';
  constructor(private http: HttpClient) {}
  async getLinkItem(): Promise<ItemLink[]> {
    let lstItem: ItemLink[] = [];

    const data = await this.http.get(this.url, {
        headers: new HttpHeaders({
          Accept: 'text/html',
        }),
        responseType: 'text',
      })
      .toPromise();
    // parser to HTML content
    let parser = new DOMParser();
    let html = parser.parseFromString(data, 'text/html');
    let content = html.getElementsByClassName('list-rss')[0].getElementsByTagName('li');
    console.log(content);
    let link ='https://tuoitre.vn' +content[0].getElementsByTagName('a')[0].getAttribute('href') ?? '';
    let title = content[0].getElementsByTagName('a')[0].innerText.slice(0,-3);
    console.log(title);
    let item: ItemLink = new ItemLink(title, link);
    lstItem.push(item);
    console.log(lstItem);
    for (let i = 1; i < content.length; i++) {
      let link = content[i].getElementsByTagName('a')[0].href;
      let title = content[i].getElementsByTagName('a')[0].innerText.slice(0,-3);
      let item: ItemLink = new ItemLink(title, link);
      lstItem.push(item);
    }
    return lstItem;

  }
}
