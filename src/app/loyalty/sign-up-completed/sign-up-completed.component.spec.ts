import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCompletedComponent } from './sign-up-completed.component';

describe('SignUpCompletedComponent', () => {
  let component: SignUpCompletedComponent;
  let fixture: ComponentFixture<SignUpCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
