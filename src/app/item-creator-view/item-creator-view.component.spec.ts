import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreatorViewComponent } from './item-creator-view.component';

describe('ItemCreatorViewComponent', () => {
  let component: ItemCreatorViewComponent;
  let fixture: ComponentFixture<ItemCreatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCreatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
