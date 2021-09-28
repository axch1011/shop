import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationViewComponent } from './top-navigation-view.component';

describe('TopNavigationViewComponent', () => {
  let component: TopNavigationViewComponent;
  let fixture: ComponentFixture<TopNavigationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavigationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
