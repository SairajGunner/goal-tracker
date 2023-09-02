import { Task } from './task';

export class Goal {
  _id?: string;
  priority?: number | undefined;
  title: string;
  parentId: string;
  description?: string;
  pictureSource?: string;
  lastUpdate: string;
  isComplete: boolean;
  tasks: Array<Task>;

  constructor(
    priority: number | undefined,
    title: string,
    parentId: string,
    description: string,
    pictureSource: string,
    lastUpdate: string,
    isComplete: boolean,
    tasks: Array<Task>
  ) {
    this.priority = priority;
    this.title = title;
    this.parentId = parentId;
    this.description = description;
    this.pictureSource = pictureSource;
    this.lastUpdate = lastUpdate;
    this.isComplete = isComplete;
    this.tasks = tasks;
  }
}
