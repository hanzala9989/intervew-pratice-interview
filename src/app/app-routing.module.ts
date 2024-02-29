import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountTimerComponent } from './count-timer/count-timer.component';

const routes: Routes = [
  {
    path: 'countTimer',
    component: CountTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
