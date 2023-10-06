import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './core/components/goals/goals.component';
import { WeeklyTrackerComponent } from './core/components/weekly-tracker/weekly-tracker.component';

const routes: Routes = [
  { path: '', component: GoalsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'weekly-tracker', component: WeeklyTrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
