import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path: '', component: TasklistComponent },
  { path: 'detail', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
