import { Component, Input } from '@angular/core';
import { TrackedTask } from 'src/app/core/models/tracked-task';

@Component({
  selector: 'app-tracked-task-card',
  templateUrl: './tracked-task-card.component.html',
  styleUrls: ['./tracked-task-card.component.scss']
})
export class TrackedTaskCardComponent {
  @Input() task: TrackedTask = new TrackedTask();
}
