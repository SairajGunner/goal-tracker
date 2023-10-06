import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedTaskCardComponent } from './tracked-task-card.component';

describe('TrackedTaskCardComponent', () => {
  let component: TrackedTaskCardComponent;
  let fixture: ComponentFixture<TrackedTaskCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackedTaskCardComponent]
    });
    fixture = TestBed.createComponent(TrackedTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
