import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path: '', component: TasklistComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: ':id', component: TaskDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
