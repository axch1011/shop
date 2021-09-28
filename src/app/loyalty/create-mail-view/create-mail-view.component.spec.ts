import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMailViewComponent } from './create-mail-view.component';

describe('CreateMailViewComponent', () => {
  let component: CreateMailViewComponent;
  let fixture: ComponentFixture<CreateMailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
