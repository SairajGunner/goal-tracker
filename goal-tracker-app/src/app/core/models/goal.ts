import { Task } from './task';

export class Goal {
  _id?: String;
  title: String;
  parentId: String;
  description?: String;
  lastUpdate: String;
  isComplete: Boolean;
  tasks: Array<Task>;

  constructor(
    title: String,
    parentId: String,
    description: String,
    lastUpdate: String,
    isComplete: Boolean,
    tasks: Array<Task>
  ) {
    this.title = title;
    this.parentId = parentId;
    this.description = description;
    this.lastUpdate = lastUpdate;
    this.isComplete = isComplete;
    this.tasks = tasks;
  }
}
