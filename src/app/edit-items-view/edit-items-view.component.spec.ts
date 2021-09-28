import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemsViewComponent } from './edit-items-view.component';

describe('EditItemsViewComponent', () => {
  let component: EditItemsViewComponent;
  let fixture: ComponentFixture<EditItemsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
