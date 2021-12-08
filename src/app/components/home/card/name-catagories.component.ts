import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-catagories',
  template: `
  <div class="name-title">
    <i class="fa fa-arrow-right" aria-hidden="true" style="color: red"></i>
    <span style="text-transform: uppercase;">
      <strong><ng-content></ng-content></strong>
    </span>
  </div>
  `,
  styleUrls: ['./view-news-card/view-news-card.component.sass']

})
export class NameCatagoriesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
