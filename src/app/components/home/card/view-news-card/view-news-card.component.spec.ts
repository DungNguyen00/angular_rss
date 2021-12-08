import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsCardComponent } from './view-news-card.component';

describe('ViewNewsCardComponent', () => {
  let component: ViewNewsCardComponent;
  let fixture: ComponentFixture<ViewNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
