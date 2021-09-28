import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseListViewComponent } from './purchase-list-view.component';

describe('PurchaseListViewComponent', () => {
  let component: PurchaseListViewComponent;
  let fixture: ComponentFixture<PurchaseListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
