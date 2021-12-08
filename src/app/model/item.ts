export class Item {
  title: string;
  linkDetail: string;
  description: string;
  linkImg: string;
  updateTime: Date;
  constructor(
    title: string,
    linkDetail: string,
    description: string,
    linkImg: string,
    updateTime: Date,

  ) {
    this.title = title;
    this.linkDetail = linkDetail;
    this.description = description;
    this.linkImg = linkImg;
    this.updateTime = updateTime;
  }

}
