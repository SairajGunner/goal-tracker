import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { GoalsComponent } from './components/goals/goals.component';
import { WeeklyTrackerComponent } from './components/weekly-tracker/weekly-tracker.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, GoalsComponent, WeeklyTrackerComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
