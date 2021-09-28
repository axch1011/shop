import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemViewComponent } from './purchase-item-view.component';

describe('PurchaseItemViewComponent', () => {
  let component: PurchaseItemViewComponent;
  let fixture: ComponentFixture<PurchaseItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
