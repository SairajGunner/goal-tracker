export class Task {
  title: string;
  parentId?: string;
  description?: string;
  isComplete: boolean;
  dateCompleted: string;

  constructor(
    title: string,
    parentId: string,
    description: string,
    isComplete: boolean,
    dateCompleted: string
  ) {
    this.title = title;
    this.parentId = parentId;
    this.description = description;
    this.isComplete = isComplete;
    this.dateCompleted = dateCompleted;
  }
}
