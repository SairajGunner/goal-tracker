export class Task {
  title: string;
  parentId: string;
  description: string;
  isComplete: boolean;
  dateCompleted: string;
}

export class Goal {
  priority: number;
  title: string;
  parentId: string;
  description: string;
  pictureSource: string;
  lastUpdate: string;
  isComplete: boolean;
  tasks: Array<Task>;
}
