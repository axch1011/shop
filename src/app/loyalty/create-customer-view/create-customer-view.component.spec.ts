import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerViewComponent } from './create-customer-view.component';

describe('CreateCustomerViewComponent', () => {
  let component: CreateCustomerViewComponent;
  let fixture: ComponentFixture<CreateCustomerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
