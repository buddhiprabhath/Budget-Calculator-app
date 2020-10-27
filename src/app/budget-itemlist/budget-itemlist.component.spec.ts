import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemlistComponent } from './budget-itemlist.component';

describe('BudgetItemlistComponent', () => {
  let component: BudgetItemlistComponent;
  let fixture: ComponentFixture<BudgetItemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
