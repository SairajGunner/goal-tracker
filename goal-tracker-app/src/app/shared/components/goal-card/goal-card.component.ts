import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Goal } from 'src/app/core/models/goal';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss'],
})
export class GoalCardComponent implements OnChanges {
  @Input() goal: Goal = new Goal('', '', '', '', false, []);
  lastUpdatedDate: Date = new Date();
  faCheck = faCheck;

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes) {
      if (change == 'goal') {
        this.lastUpdatedDate = new Date(this.goal.lastUpdate.toString());
      }
    }
  }

  toggleComplete() {
    this.goal.isComplete = !this.goal.isComplete;
  }
}
