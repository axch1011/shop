import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListViewComponent } from './order-list-view.component';

describe('OrderListViewComponent', () => {
  let component: OrderListViewComponent;
  let fixture: ComponentFixture<OrderListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
