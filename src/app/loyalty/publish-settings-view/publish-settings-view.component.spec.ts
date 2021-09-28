import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishSettingsViewComponent } from './publish-settings-view.component';

describe('PublishSettingsViewComponent', () => {
  let component: PublishSettingsViewComponent;
  let fixture: ComponentFixture<PublishSettingsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishSettingsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishSettingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
