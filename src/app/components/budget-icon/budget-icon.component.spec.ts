import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetIconComponent } from './budget-icon.component';

describe('BudgetIconComponent', () => {
  let component: BudgetIconComponent;
  let fixture: ComponentFixture<BudgetIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
