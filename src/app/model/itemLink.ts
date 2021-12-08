export class ItemLink {
  title: string;
  link: string;

  constructor(title: string, link: string) {
      this.title = title;
      this.link = link;
  }
   router(): string {
      let first = this.link.lastIndexOf('/');
      let last = this.link.lastIndexOf('.');
      return this.link.substring(first+1, last);
  }
}
