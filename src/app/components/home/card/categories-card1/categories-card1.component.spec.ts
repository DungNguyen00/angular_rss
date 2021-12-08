import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCard1Component } from './categories-card1.component';

describe('CategoriesCard1Component', () => {
  let component: CategoriesCard1Component;
  let fixture: ComponentFixture<CategoriesCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
