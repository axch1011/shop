import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationViewComponent } from './side-navigation-view.component';

describe('SideNavigationViewComponent', () => {
  let component: SideNavigationViewComponent;
  let fixture: ComponentFixture<SideNavigationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavigationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
