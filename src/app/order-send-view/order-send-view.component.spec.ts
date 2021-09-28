import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSendViewComponent } from './order-send-view.component';

describe('OrderSendViewComponent', () => {
  let component: OrderSendViewComponent;
  let fixture: ComponentFixture<OrderSendViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSendViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
