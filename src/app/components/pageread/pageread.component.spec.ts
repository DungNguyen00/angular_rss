import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagereadComponent } from './pageread.component';

describe('PagereadComponent', () => {
  let component: PagereadComponent;
  let fixture: ComponentFixture<PagereadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagereadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagereadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
