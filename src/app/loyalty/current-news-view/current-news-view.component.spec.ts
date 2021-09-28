import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNewsViewComponent } from './current-news-view.component';

describe('CurrentNewsViewComponent', () => {
  let component: CurrentNewsViewComponent;
  let fixture: ComponentFixture<CurrentNewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentNewsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
