import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalCardComponent } from './components/goal-card/goal-card.component';

@NgModule({
  declarations: [GoalCardComponent],
  imports: [CommonModule],
  exports: [GoalCardComponent],
})
export class SharedModule {}
