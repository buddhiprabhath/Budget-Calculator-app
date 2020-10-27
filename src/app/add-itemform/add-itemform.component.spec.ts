import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemformComponent } from './add-itemform.component';

describe('AddItemformComponent', () => {
  let component: AddItemformComponent;
  let fixture: ComponentFixture<AddItemformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
