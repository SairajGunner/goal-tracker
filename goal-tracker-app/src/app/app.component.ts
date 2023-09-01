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
    this.shortTermGoalsService.getAllShortTermGoals().subscribe((response) => {
      this.shortTermGoals = response;
    });
  };

  getAllMidTermGoals = () => {
    this.midTermGoalsService.getAllMidTermGoals().subscribe((response) => {
      this.midTermGoals = response;
    });
  };

  getAllLongTermGoals = () => {
    this.longTermGoalsService.getAllLongTermGoals().subscribe((response) => {
      this.longTermGoals = response;
    });
  };
}
