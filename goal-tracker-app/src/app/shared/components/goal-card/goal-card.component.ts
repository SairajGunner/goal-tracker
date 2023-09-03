import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
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
  // @ViewChild('fileInput', { static: false }) fileInput?: ElementRef;
  @Input() goal: Goal = new Goal(undefined, '', '', '', '', '', false, []);
  @Input() editMode: Boolean = false;
  @Input() parentGoals: Array<Goal> = [];
  @Output() updateGoal: EventEmitter<Goal> = new EventEmitter<Goal>();
  @Output() addGoal: EventEmitter<Goal> = new EventEmitter<Goal>();
  lastUpdatedDate: Date = new Date();
  additionalTask: string = '';
  faCheck = faCheck;
  faArrowRight = faArrowRight;

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes) {
      if (change == 'goal') {
        this.lastUpdatedDate = new Date(this.goal.lastUpdate);
      }
    }
  }

  toggleComplete(taskBeingUpdated: Task) {
    let updatedTask = this.goal.tasks?.find(
      (task) => task === taskBeingUpdated
    );
    if (updatedTask) {
      updatedTask.isComplete = !updatedTask.isComplete;
      if (!this.editMode) {
        if (updatedTask.isComplete) {
          this.goal.lastUpdate = updatedTask.dateCompleted =
            new Date().toLocaleDateString('en-CA');
          this.updateGoal.emit(this.goal);
        } else {
          this.goal.lastUpdate = new Date().toLocaleDateString('en-CA');
          updatedTask.dateCompleted = '';
          this.updateGoal.emit(this.goal);
        }
      }
    }
  }

  addTask() {
    const task: Task = new Task(
      this.additionalTask,
      this.goal._id ? this.goal._id : '',
      '',
      false,
      new Date().toLocaleDateString('en-CA')
    );
    this.goal.tasks.push(task);
    if (!this.editMode) this.updateGoal.emit(this.goal);
    this.additionalTask = '';
  }

  showParentGoalTitle(): string | undefined {
    return this.parentGoals?.find((goal) => goal._id === this.goal.parentId)
      ?.title;
  }

  postNewGoal(): void {
    if (this.goal.title) {
      if (this.parentGoals.length > 0 && this.goal.parentId) {
        this.goal.lastUpdate = new Date().toLocaleDateString('en-CA');
        this.addGoal.emit(this.goal);
        this.goal = new Goal(undefined, '', '', '', '', '', false, []);
      } else {
        this.goal.lastUpdate = new Date().toLocaleDateString('en-CA');
        this.addGoal.emit(this.goal);
        this.goal = new Goal(undefined, '', '', '', '', '', false, []);
      }
    }
  }

  // handleFileUpload(): void {
  //   console.log(this.fileInput?.nativeElement.files[0]);
  // }
}
