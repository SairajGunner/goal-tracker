import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalCardComponent } from './components/goal-card/goal-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [GoalCardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [GoalCardComponent],
})
export class SharedModule {}
