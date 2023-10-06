export class TrackedTask {
  year: number;
  month: number;
  weekStartDate: number;
  title?: string;
  description?: string;
  isComplete: boolean;
  dateCompleted?: string;

  constructor(
    title?: string,
    year?: number,
    month?: number,
    weekStartDate?: number,
    isComplete?: boolean,
    description?: string,
    dateCompleted?: string
  ) {
    if (year) this.year = year;
    else this.year = new Date().getFullYear();
    if (month) this.month = month;
    else this.month = new Date().getMonth() + 1;
    if (weekStartDate) this.weekStartDate = weekStartDate;
    else {
      // if date is in the first week where the month starts on a day other than Sunday
      if (new Date().getUTCDate() - new Date().getUTCDay() < 0)
        this.weekStartDate = 1;
      else this.weekStartDate = new Date().getDate() - new Date().getDay();
    }
    this.title = title ? title : undefined;
    this.isComplete = isComplete ? isComplete : false;
    this.description = description ? description : undefined;
    this.dateCompleted = dateCompleted ? dateCompleted : undefined;
  }
}
