import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerCompletedViewComponent } from './create-customer-completed-view.component';

describe('CreateCustomerCompletedViewComponent', () => {
  let component: CreateCustomerCompletedViewComponent;
  let fixture: ComponentFixture<CreateCustomerCompletedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerCompletedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomerCompletedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
