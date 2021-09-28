import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRevenueGraphComponent } from './product-revenue-graph.component';

describe('ProductRevenueGraphComponent', () => {
  let component: ProductRevenueGraphComponent;
  let fixture: ComponentFixture<ProductRevenueGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRevenueGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRevenueGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
