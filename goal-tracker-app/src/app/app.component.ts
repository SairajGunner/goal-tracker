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
export class AppComponent {}
