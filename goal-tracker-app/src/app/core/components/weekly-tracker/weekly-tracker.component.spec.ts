import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTrackerComponent } from './weekly-tracker.component';

describe('WeeklyTrackerComponent', () => {
  let component: WeeklyTrackerComponent;
  let fixture: ComponentFixture<WeeklyTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyTrackerComponent]
    });
    fixture = TestBed.createComponent(WeeklyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
