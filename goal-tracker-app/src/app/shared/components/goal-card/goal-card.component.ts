import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Goal } from 'src/app/core/models/goal';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.scss'],
})
export class GoalCardComponent implements OnChanges {
  @Input() goal: Goal = new Goal('', '', '', '', false, []);
  @Input() editMode: Boolean = false;
  @Input() parentGoals: Array<Goal> = [];
  @Output() addGoal: EventEmitter<Goal> = new EventEmitter<Goal>();
  lastUpdatedDate: Date = new Date();
  additionalTask: string = '';
  faCheck = faCheck;
  faArrowRight = faArrowRight;

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

  addTask() {
    const task: Task = new Task(
      this.additionalTask,
      this.goal.parentId,
      '',
      false,
      new Date().toLocaleDateString('en-CA')
    );
    this.goal.tasks.push(task);
    this.additionalTask = '';
  }

  showParentGoalTitle(): string | undefined {
    return this.parentGoals
      ?.find((goal) => goal._id === this.goal.parentId)
      ?.title.toString();
  }

  postNewGoal(): void {
    if (this.goal.title) {
      if (this.parentGoals.length > 0 && this.goal.parentId) {
        this.goal.lastUpdate = new Date().toLocaleDateString('en-CA');
        this.addGoal.emit(this.goal);
        this.goal = new Goal('', '', '', '', false, []);
      } else {
        this.goal.lastUpdate = new Date().toLocaleDateString('en-CA');
        this.addGoal.emit(this.goal);
        this.goal = new Goal('', '', '', '', false, []);
      }
    }
  }
}
