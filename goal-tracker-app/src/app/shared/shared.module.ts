import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalCardComponent } from './components/goal-card/goal-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GoalCardComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [GoalCardComponent],
})
export class SharedModule {}
