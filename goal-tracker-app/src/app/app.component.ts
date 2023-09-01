import { Component, OnInit } from '@angular/core';
import { ShortTermGoalsService } from './core/services/short-term-goals.service';
import { Goal } from './core/models/goal';
import { MidTermGoalsService } from './core/services/mid-term-goals.service';
import { LongTermGoalsService } from './core/services/long-term-goals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShortTermGoalsService, MidTermGoalsService, LongTermGoalsService],
})
export class AppComponent implements OnInit {
  title = 'goal-tracker-app';
  shortTermGoals: Array<Goal>;
  midTermGoals: Array<Goal>;
  longTermGoals: Array<Goal>;

  constructor(
    private shortTermGoalsService: ShortTermGoalsService,
    private midTermGoalsService: MidTermGoalsService,
    private longTermGoalsService: LongTermGoalsService
  ) {
    this.shortTermGoals = [];
    this.midTermGoals = [];
    this.longTermGoals = [];
  }

  ngOnInit(): void {
    this.getAllShortTermGoals();
    this.getAllMidTermGoals();
    this.getAllLongTermGoals();
  }

  getAllShortTermGoals = () => {
    this.shortTermGoalsService
      .getAllShortTermGoals()
      .subscribe((response: Array<Goal>) => {
        this.shortTermGoals = response;
      });
  };

  getAllMidTermGoals = () => {
    this.midTermGoalsService
      .getAllMidTermGoals()
      .subscribe((response: Array<Goal>) => {
        this.midTermGoals = response;
      });
  };

  getAllLongTermGoals = () => {
    this.longTermGoalsService
      .getAllLongTermGoals()
      .subscribe((response: Array<Goal>) => {
        this.longTermGoals = response;
      });
  };

  updateShortTermGoal(goal: Goal) {
    this.shortTermGoalsService.updateShortTermGoalById(goal).subscribe();
  }

  updateMidTermGoal(goal: Goal) {
    this.midTermGoalsService.updateMidTermGoalById(goal).subscribe();
  }

  updateLongTermGoal(goal: Goal) {
    this.longTermGoalsService.updateLongTermGoalById(goal).subscribe();
  }

  addShortTermGoal(goal: Goal) {
    this.shortTermGoalsService
      .createShortTermGoal(goal)
      .subscribe((response: Goal) => {
        this.shortTermGoals.push(response);
      });
  }

  addMidTermGoal(goal: Goal) {
    this.midTermGoalsService
      .createMidTermGoal(goal)
      .subscribe((response: Goal) => {
        this.midTermGoals.push(response);
      });
  }

  addLongTermGoal(goal: Goal) {
    this.longTermGoalsService
      .createLongTermGoal(goal)
      .subscribe((response: Goal) => {
        this.longTermGoals.push(response);
      });
  }
}
