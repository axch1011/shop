import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListViewComponent } from './brand-list-view.component';

describe('BrandListViewComponent', () => {
  let component: BrandListViewComponent;
  let fixture: ComponentFixture<BrandListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
