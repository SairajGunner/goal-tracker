export class Task {
  title: String;
  parentId: String;
  description?: String;
  isComplete: Boolean;
  dateCompleted: String;

  constructor(
    title: String,
    parentId: String,
    description: String,
    isComplete: Boolean,
    dateCompleted: String
  ) {
    this.title = title;
    this.parentId = parentId;
    this.description = description;
    this.isComplete = isComplete;
    this.dateCompleted = dateCompleted;
  }
}

