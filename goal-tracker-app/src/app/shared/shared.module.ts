import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalCardComponent } from './components/goal-card/goal-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TrackedTaskCardComponent } from './components/tracked-task-card/tracked-task-card.component';

@NgModule({
  declarations: [GoalCardComponent, TrackedTaskCardComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [GoalCardComponent, TrackedTaskCardComponent],
})
export class SharedModule {}
