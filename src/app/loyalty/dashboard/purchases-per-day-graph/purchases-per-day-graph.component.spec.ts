import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesPerDayGraphComponent } from './purchases-per-day-graph.component';

describe('PurchasesPerDayGraphComponent', () => {
  let component: PurchasesPerDayGraphComponent;
  let fixture: ComponentFixture<PurchasesPerDayGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesPerDayGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesPerDayGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
