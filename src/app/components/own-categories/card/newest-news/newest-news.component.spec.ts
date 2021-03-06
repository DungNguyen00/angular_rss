import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestNewsComponent } from './newest-news.component';

describe('NewestNewsComponent', () => {
  let component: NewestNewsComponent;
  let fixture: ComponentFixture<NewestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
