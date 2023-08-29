export class Task {
  title: String;
  parentId: String;
  description: String;
  isComplete: Boolean;
  dateCompleted: String;
}

export class Goal {
    title: String;
    parentId: String;
    description: String;
    lastUpdate: String;
    isComplete: Boolean;
    tasks: Array<Task>;
}
