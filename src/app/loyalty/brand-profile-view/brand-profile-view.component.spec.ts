import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandProfileViewComponent } from './brand-profile-view.component';

describe('BrandProfileViewComponent', () => {
  let component: BrandProfileViewComponent;
  let fixture: ComponentFixture<BrandProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
