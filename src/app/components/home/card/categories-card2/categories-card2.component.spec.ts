import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCard2Component } from './categories-card2.component';

describe('CategoriesCard2Component', () => {
  let component: CategoriesCard2Component;
  let fixture: ComponentFixture<CategoriesCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
