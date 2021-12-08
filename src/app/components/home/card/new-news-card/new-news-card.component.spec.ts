import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNewsCardComponent } from './new-news-card.component';

describe('NewNewsCardComponent', () => {
  let component: NewNewsCardComponent;
  let fixture: ComponentFixture<NewNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNewsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
