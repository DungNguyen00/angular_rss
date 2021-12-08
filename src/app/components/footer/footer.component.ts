import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { ItemMenu } from 'src/app/model/itemMenu';
import { FeedlinkService } from 'src/app/service/service-feedLink/feedlink.service';
import { MenuService } from 'src/app/service/service-menu/menu.service';
declare var jQuery: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {


link = 'https://trackingnew-b7f6e.web.app/';

  show!: boolean;
  public item: ItemMenu[] = [];
  arrDay = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy',
  ];

  constructor(
    private menuServices: MenuService,
    private feedlinkService: FeedlinkService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {

    this.menuServices.getItem().then((data) => {
      this.item = data;
    });

    (function ($) {
      $(document).ready(function () {
        window.onscroll = function () {
          myFunction();
        };
        var navbar = document.getElementById('myHeaderBottom')!;
        var sticky = navbar.offsetTop;
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
          } else {
            navbar.classList.remove('sticky');
          }
        }
      });
    })(jQuery);
  }
  getDate() {
    let today: Date = new Date();
    let date =
      this.arrDay[today.getDay()] +
      ', ngày ' +
      today.getDate() +
      ', tháng ' +
      (today.getMonth() + 1) +
      ', năm ' +
      today.getFullYear();
    return date;
  }

  showCategory(i: number | number) {
    let ten = this.item[i].parent.title;
    switch(ten){
      case "Thời sự":
        this.link = this.link + 'news' ;
        this.document.location.href = (this.link);
        break;
      case "Thế giới":
        this.link = this.link + "world" ;
        this.document.location.href = (this.link);
        break;
      case "Pháp luật":
        this.link = this.link + "law" ;
        this.document.location.href = (this.link);
        break;
      case "Kinh doanh":
        this.link = this.link + "business" ;
        this.document.location.href = (this.link);
        break;
      case "Công nghệ":
        this.link = this.link + "technology" ;
        this.document.location.href = (this.link);
        break;
      case "Xe":
        this.link = this.link +"car" ;
        this.document.location.href = (this.link);
        break;
      case "Nhịp sống trẻ":
        this.link = this.link + "lifetStyleYoung" ;
        this.document.location.href = (this.link);
        break;
      case "Văn hóa":
        this.link = this.link + "cultural" ;
        this.document.location.href = (this.link);
        break;
      case "Giải trí":
        this.link = this.link + "entertainment" ;
        this.document.location.href = (this.link);
        break;
      case "Thể thao":
        this.link = this.link + "sport" ;
        this.document.location.href = (this.link);
        break;
      case "Giáo dục":
        this.link = this.link + "education" ;
        this.document.location.href = (this.link);
        break;
      case "Khoa học":
        this.link = this.link + "science" ;
        this.document.location.href = (this.link);
        break;
      case "Sức khỏe":
        this.link = this.link + "health" ;
        this.document.location.href = (this.link);
        break;
      case "Giả thật":
        this.link = this.link + "readFake" ;
        this.document.location.href = (this.link);
        break;
      case "thu-gian":
        this.link = this.link + "news" ;
        this.document.location.href = (this.link);
        break;
      case "Bạn đọc":
        this.link = this.link + "youRead" ;
        this.document.location.href = (this.link);
        break;
      case "Du lịch":
        this.link = this.link + "travel" ;
        this.document.location.href = (this.link);
        break;
    }
    console.log(ten);
    this.show = !this.show;
    console.log(this.item[i].parent.link);
    
  }
  scrolltotop(){
    let scroll = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); 
        } else {
            window.clearInterval(scroll);
        }
    }, 16);
}
}
